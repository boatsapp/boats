// Boats web: Firebase-backed stand-in for the Claude artifact runtime (db, user, downloads).
// The app keeps calling claude.use(...); this file answers with Firebase Auth + Firestore.
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, onAuthStateChanged, GoogleAuthProvider, OAuthProvider, signInWithPopup, signInWithRedirect, signInWithCredential, getRedirectResult, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";
import { initializeFirestore, connectFirestoreEmulator, persistentLocalCache, memoryLocalCache, collection, doc, getDoc, getDocs, setDoc, deleteDoc, onSnapshot, query, where } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const EMU = location.hostname === "localhost" && new URLSearchParams(location.search).has("emu");
const auth = getAuth(app);
const fs = initializeFirestore(app, { localCache: EMU ? memoryLocalCache() : persistentLocalCache() });
if(EMU){ connectAuthEmulator(auth, "http://127.0.0.1:9199", { disableWarnings: true }); connectFirestoreEmulator(fs, "127.0.0.1", 8181);
  window.__emuSignIn = n => signInWithCredential(auth, GoogleAuthProvider.credential(JSON.stringify({ sub: n, email: n + "@test.com", email_verified: true, name: n }))).then(() => location.reload()); }

// Data is stored as JSON text so any app shape fits Firestore; a few top-level fields stay queryable for rules.
const pack = (data, extra={}) => ({ j: JSON.stringify(data), at: Date.now(), ...extra });
const unpack = s => { const x = s.data(); if(!x) return null; try { return JSON.parse(x.j); } catch(e) { return null; } };
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
const s = document.createElement("script"); s.textContent = document.getElementById("appsrc").textContent; document.body.appendChild(s);
