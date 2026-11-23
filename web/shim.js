// Boats web: Firebase-backed stand-in for the Claude artifact runtime (db, user, downloads).
// The app keeps calling claude.use(...); this file answers with Firebase Auth + Firestore.
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, onAuthStateChanged, GoogleAuthProvider, OAuthProvider, signInWithPopup, signInWithRedirect, signInWithCredential, getRedirectResult, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";
import { initializeFirestore, connectFirestoreEmulator, persistentLocalCache, memoryLocalCache, collection, doc, getDoc, getDocs, setDoc, deleteDoc, onSnapshot, query, where, limit, runTransaction } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config.js";

// Install support: keep Chrome's install prompt for the in-app "Install BOATS" button, and register a tiny service worker.
window.__bip = null;
addEventListener("beforeinstallprompt", e => { e.preventDefault(); window.__bip = e; try { if(window.S && S.meView === "install") window.render(); } catch(_) {} });
if("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("/sw.js").catch(() => {});
const app = initializeApp(firebaseConfig);
const EMU = location.hostname === "localhost" && new URLSearchParams(location.search).has("emu");
const auth = getAuth(app);
const fs = initializeFirestore(app, { localCache: EMU ? memoryLocalCache() : persistentLocalCache() });
if(EMU){ connectAuthEmulator(auth, "http://127.0.0.1:9199", { disableWarnings: true }); connectFirestoreEmulator(fs, "127.0.0.1", 8181);
  window.__emuSignIn = n => signInWithCredential(auth, GoogleAuthProvider.credential(JSON.stringify({ sub: n, email: n + "@test.com", email_verified: true, name: n }))).then(() => location.reload());
  window.__emuSignIn2 = (n, e) => signInWithCredential(auth, GoogleAuthProvider.credential(JSON.stringify({ sub: n, email: e, email_verified: true, name: n }))).then(() => location.reload()); }

// Data is stored as JSON text so any app shape fits Firestore; a few top-level fields stay queryable for rules.
const pack = (data, extra={}) => ({ j: JSON.stringify(data), at: Date.now(), ...extra });
const unpack = s => { const x = s.data(); if(!x) return null; if(typeof x.j !== "string") return x; try { return JSON.parse(x.j); } catch(e) { return null; } };   // docs written by admin tools (founders) are plain fields
const snapOf = docs => ({ docs: docs.map(d => ({ id: d.id, data: () => unpack(d) })) });

function mapPath(p){ const m = /^data\/users\/(.+)$/.exec(p); return m ? `users/${m[1]}/data` : p; }

// Plain collections: people, posts, reactions, feedback, library, users/{uid}/data
function plainCollection(path){
  const c = collection(fs, mapPath(path));
  return {
    get: async () => snapOf((await getDocs(c)).docs),
    onSnapshot: (ok, bad) => onSnapshot(c, s => ok(snapOf(s.docs)), bad),
    doc: id => {
      const r = doc(c, id);
      return {
        get: async () => { const s = await getDoc(r); return { exists: s.exists(), data: () => s.exists() ? unpack(s) : null }; },
        set: data => setDoc(r, pack(data)),
        delete: () => deleteDoc(r),
      };
    },
  };
}

// DMs: the app writes dms/{me} = {out:{toUid:[msgs]}}. Here each pair is its own private doc
// threads/{from}_{to}, readable only by those two people.
function dmCollection(){
  const me = auth.currentUser.uid, c = collection(fs, "threads");
  let sent = {}, got = {};
  const build = () => {
    const m = {}; m[me] = { out: Object.fromEntries(Object.entries(sent)) };
    for(const [from, list] of Object.entries(got)){ m[from] = m[from] || { out: {} }; m[from].out[me] = list; }
    return { docs: Object.entries(m).map(([id, x]) => ({ id, data: () => x })) };
  };
  return {
    onSnapshot: (ok, bad) => {
      const u1 = onSnapshot(query(c, where("from", "==", me)), s => { sent = {}; s.docs.forEach(d => { const x = unpack(d); if(x) sent[d.data().to] = x; }); ok(build()); }, bad);
      const u2 = onSnapshot(query(c, where("to", "==", me)), s => { got = {}; s.docs.forEach(d => { const x = unpack(d); if(x) got[d.data().from] = x; }); ok(build()); }, bad);
      return () => { u1(); u2(); };
    },
    get: async () => build(),
    doc: id => ({
      get: async () => ({ exists: true, data: () => build().docs.find(d => d.id === id)?.data() || null }),
      set: async data => {
        if(id !== me) throw new Error("permission");
        const out = (data && data.out) || {};
        const jobs = Object.entries(out).map(([to, list]) => setDoc(doc(c, `${me}_${to}`), pack(list, { from: me, to })));
        for(const to of Object.keys(sent)) if(!out[to]) jobs.push(deleteDoc(doc(c, `${me}_${to}`)));
        await Promise.all(jobs);
      },
      delete: async () => { await Promise.all(Object.keys(sent).map(to => deleteDoc(doc(c, `${me}_${to}`)))); },
    }),
  };
}

const db = { collection: p => p === "dms" ? dmCollection() : plainCollection(p) };
const user = { id: async () => auth.currentUser?.uid || null, name: async () => auth.currentUser?.displayName || null };
const downloads = {
  save: async ({ filename, data }) => {
    const blob = data instanceof Blob ? data : new Blob([data]);
    const file = new File([blob], filename, { type: blob.type || "application/octet-stream" });
    if(navigator.canShare && navigator.canShare({ files: [file] }) && /iPhone|iPad|Android/i.test(navigator.userAgent)){
      try { await navigator.share({ files: [file] }); return { status: "saved" }; } catch(e){ if(e.name === "AbortError") throw { code: "declined" }; }
    }
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 4000);
    return { status: "saved" };
  },
};
window.claude = { use: async k => ({ db, user, downloads })[k] || null };
window.boatsSignOut = async () => { await signOut(auth); localStorage.clear(); location.reload(); };

// Public: how many people are on BOATS (the next Founding Crew number minus one). Works before sign-in.
window.boatsUserCount = async () => { try { const g = await getDoc(doc(fs, "meta", "founders")); return g.exists() ? Math.max(0, (g.data().next || 1) - 1) : 0; } catch(e) { return 0; } };
// DM photos: dmphotos/{from}_{to}_{time}, readable only by the two people in the chat.
window.boatsDmPhoto = {
  save: async (to, at, dataUrl) => { const me = auth.currentUser.uid, id = `${me}_${to}_${at}`; await setDoc(doc(fs, "dmphotos", id), { from: me, to, d: dataUrl, at }); return id; },
  get: async id => { const g = await getDoc(doc(fs, "dmphotos", id)); return g.exists() ? g.data().d : null; },
};
// ---- sign-in ----
window.boatsSignIn = async kind => {
  const p = kind === "apple" ? new OAuthProvider("apple.com") : new GoogleAuthProvider();
  if(kind === "google") p.setCustomParameters({ prompt: "select_account" });
  try { await signInWithPopup(auth, p); location.reload(); }
  catch(e){
    if(e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment") return signInWithRedirect(auth, p);
    if(e.code !== "auth/popup-closed-by-user" && e.code !== "auth/cancelled-popup-request") window.toast && window.toast("Sign-in failed. Try again.");
  }
};
await setPersistence(auth, browserLocalPersistence).catch(() => {});
getRedirectResult(auth).then(r => { if(r && r.user && !window.__boatsHadUser) location.reload(); }).catch(() => {});
const authReady = new Promise(res => { const off = onAuthStateChanged(auth, u => { off(); window.__boatsHadUser = !!u; res(u); }); });
user.id = async () => (await authReady)?.uid || null;
// Usernames: one owner per name, claimed in usernames/{lowercase name}. Returns "ok", "taken" or "error".
window.boatsClaimName = async (name, old) => {
  const u = auth.currentUser; if(!u) return "error";
  const lc = String(name || "").trim().toLowerCase(); if(!lc) return "error";
  const ref = doc(fs, "usernames", lc);
  try {
    await runTransaction(fs, async tx => { const s = await tx.get(ref); if(s.exists()){ if(s.data().uid !== u.uid) throw new Error("taken"); } else tx.set(ref, { uid: u.uid, at: Date.now() }); });
  } catch(e) { return e && e.message === "taken" ? "taken" : "error"; }
  const o = String(old || "").trim().toLowerCase();
  if(o && o !== lc) { try { const r = doc(fs, "usernames", o); const s = await getDoc(r); if(s.exists() && s.data().uid === u.uid) await deleteDoc(r); } catch(e) {} }
  return "ok";
};
// Founding Crew: the first 100 members get a permanent number. meta/founders.next is the next free number;
// it is created by the one-time backfill (tools/backfill-founders.mjs), so new members only claim once numbering exists.
window.boatsClaimFounder = async () => {
  const u = auth.currentUser; if(!u) return 0;
  const mine = doc(fs, "founders", u.uid), meta = doc(fs, "meta", "founders");
  try {
    return await runTransaction(fs, async tx => {
      const m = await tx.get(meta), f = await tx.get(mine);
      if(f.exists()) return f.data().n;
      if(!m.exists()) return 0;
      const n = m.data().next; if(!(n >= 1 && n <= 100)) return 0;
      tx.set(mine, { n, at: Date.now() }); tx.update(meta, { next: n + 1 });
      return n;
    });
  } catch(e) { return 0; }
};
// Moderation: moderation/{uid} = {status:'suspended'|'deleted', until, reason} (owner writes, everyone signed in reads);
// notices/{uid} = {items:[{at,text}]} pop-up messages from BOATS (owner writes, only that person reads).
window.boatsMod = {
  watchAll: cb => authReady.then(u => { if(!u) return; onSnapshot(collection(fs, "moderation"), s => { const m = {}; s.docs.forEach(d => { m[d.id] = d.data(); }); cb(m); }, () => {}); }),
  watchNotices: cb => authReady.then(u => { if(!u) return; onSnapshot(doc(fs, "notices", u.uid), s => cb(s.exists() ? (s.data().items || []) : []), () => {}); }),
};
// Record who has an account (email + dates) for the owner's Data center, then check owner access.
// Who counts as the owner lives only in firestore.rules, so no email appears in this public code.
let adminDone; window.boatsAdminReady = new Promise(r => { adminDone = r; });
authReady.then(async u => {
  if(!u){ adminDone(false); return; }
  const ref = doc(fs, "accounts", u.uid);
  try {
    const old = await getDoc(ref);
    await setDoc(ref, { email: u.email || "", name: u.displayName || "", createdAt: old.exists() ? (old.data().createdAt || Date.now()) : Date.now(), lastAt: Date.now() });
  } catch(e) {}
  try {
    await getDocs(query(collection(fs, "accounts"), limit(1)));   // only the owner is allowed to list accounts
    window.boatsAdmin = {
      load: async () => {
        const [a, f] = await Promise.all([getDocs(collection(fs, "accounts")), getDocs(collection(fs, "feedback"))]);
        const accounts = a.docs.map(d => ({ uid: d.id, ...d.data() }));
        const feedback = [];
        f.docs.forEach(d => { const x = unpack(d); ((x && x.items) || []).forEach(it => feedback.push({ ...it, uid: d.id })); });
        return { accounts, feedback };
      },
      // Owner only (enforced by rules): suspend / unsuspend / mark deleted, send a pop-up, wipe someone's data.
      setStatus: async (uid, data) => { const r = doc(fs, "moderation", uid); if(!data) await deleteDoc(r); else await setDoc(r, { ...data, at: Date.now() }); },
      notify: async (uid, text) => { const r = doc(fs, "notices", uid), g = await getDoc(r), items = g.exists() ? (g.data().items || []) : []; await setDoc(r, { items: [...items, { at: Date.now(), text: String(text).slice(0, 500) }].slice(-20) }); },
      wipe: async uid => {
        const del = async r => { try { await deleteDoc(r); } catch(e) {} };
        const d = await getDocs(collection(fs, `users/${uid}/data`)); for(const x of d.docs) await del(x.ref);
        for(const c of ["people", "posts", "reactions", "feedback"]) await del(doc(fs, c, uid));
        const t = collection(fs, "threads"); for(const q of [query(t, where("from", "==", uid)), query(t, where("to", "==", uid))]) for(const x of (await getDocs(q)).docs) await del(x.ref);
        const un = await getDocs(query(collection(fs, "usernames"), where("uid", "==", uid))); for(const x of un.docs) await del(x.ref);
        await setDoc(doc(fs, "moderation", uid), { status: "deleted", at: Date.now() });
      },
      // Owner only (enforced by rules): moderation view of one person's saved workouts (public and private) and their DMs.
      userData: async uid => {
        const d = await getDocs(collection(fs, `users/${uid}/data`)); const workouts = [];
        d.docs.forEach(x => { const v = unpack(x); if(v && v.kind === "workout") workouts.push(v); });
        return { workouts };
      },
      userThreads: async uid => {
        const c = collection(fs, "threads"); const [a, b] = await Promise.all([getDocs(query(c, where("from", "==", uid))), getDocs(query(c, where("to", "==", uid)))]);
        return [...a.docs, ...b.docs].map(x => ({ from: x.data().from, to: x.data().to, msgs: unpack(x) || [] })).filter(t => t.msgs.length);
      },
      // Owner only (enforced by rules): change one person's feedback list, e.g. delete an item or mark it for Claude.
      editFeedback: async (uid, fn) => {
        const ref = doc(fs, "feedback", uid), g = await getDoc(ref), x = g.exists() ? (unpack(g) || {}) : {};
        await setDoc(ref, pack({ ...x, items: fn(x.items || []) }));
      },
    };
    if(window.render) try { window.render(); } catch(e) {}
    adminDone(true);
  } catch(e) { window.boatsAdmin = null; adminDone(false); }
});
const s = document.createElement("script"); s.textContent = document.getElementById("appsrc").textContent; document.body.appendChild(s);
