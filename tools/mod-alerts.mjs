// Owner alerts: push a phone notification (via ntfy) for every new public post, so the owner can moderate.
// Env: NTFY_TOPIC (GitHub secret), TEST=1 to send a test alert. Logs print counts only (the repo is public).
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
initializeApp({ credential: applicationDefault(), projectId: "boats-40d0f" });
const db = getFirestore(), topic = (process.env.NTFY_TOPIC || "").trim();
if(!topic){ console.log("NTFY_TOPIC secret is not set. Add it in repo Settings > Secrets and variables > Actions."); process.exit(0); }
const unpack = d => { const x = d && d.data && d.data(); if(!x) return null; if(typeof x.j !== "string") return x; try { return JSON.parse(x.j); } catch(e) { return null; } };
const send = async (title, body, click, tags) => {
  const r = await fetch("https://ntfy.sh/" + encodeURIComponent(topic), { method: "POST", body,
    headers: { "Title": title, "Tags": tags || "rowboat", ...(click ? { "Click": click } : {}), "Priority": "default" } });
  if(!r.ok) throw new Error("ntfy " + r.status);
};
const metaRef = db.collection("meta").doc("modalerts"), meta = (await metaRef.get()).data() || {};
if(process.env.TEST === "1" || !meta.since){
  await send("BOATS alerts are on", "You'll get a notification here every time someone posts publicly.", "https://carrytheboats.app", "white_check_mark");
  if(!meta.since){ await metaRef.set({ since: Date.now(), sent: 0 }); console.log("Alerts started. Test sent."); process.exit(0); }
  console.log("Test sent.");
}
const since = meta.since, people = Object.fromEntries((await db.collection("people").get()).docs.map(d => [d.id, unpack(d) || {}]));
const fresh = [];
for(const d of (await db.collection("posts").get()).docs){ const p = unpack(d) || {}; for(const it of (p.items || [])){ const t = it.sharedAt || it.at || 0; if(t > since && it.photo) fresh.push({ uid: d.id, it, t }); } }
fresh.sort((a, b) => a.t - b.t);
let n = 0, newest = since;
for(const { uid, it, t } of fresh.slice(0, 25)){
  const who = (people[uid] || {}).username || "someone", cap = String(it.caption || it.title || "").replace(/\s+/g, " ").trim().slice(0, 80);
  try { await send(`@${who} posted`, cap || "New public post. Tap to review.", `https://carrytheboats.app/?p=${encodeURIComponent(uid + ":" + it.id)}`, "camera"); n++; newest = Math.max(newest, t); } catch(e) { console.log("Send failed: " + e.message); break; }
}
if(fresh.length > 25){ newest = Math.max(newest, fresh[fresh.length - 1].t); await send("More new posts", `${fresh.length - 25} more public posts. Open BOATS to review.`, "https://carrytheboats.app", "camera"); }
if(newest > since) await metaRef.set({ since: newest, sent: (meta.sent || 0) + n }, { merge: true });
console.log(`New public posts: ${fresh.length}. Alerts sent: ${n}.`);
