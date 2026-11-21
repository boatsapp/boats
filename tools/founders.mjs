// Founding Crew numbers. Default: list who holds which number (read-only).
// With ORDER="name1,name2,..." (usernames, in order): give #001, #002, ... to those people in that order,
// then everyone else keeps their relative order after them. Only run ORDER when the owner asks for it.
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
initializeApp({ credential: applicationDefault(), projectId: "boats-40d0f" });
const db = getFirestore();
const people = Object.fromEntries((await db.collection("people").get()).docs.map(d => { let x = {}; try { x = JSON.parse(d.data().j || "{}"); } catch(e) {} return [d.id, x]; }));
const f = (await db.collection("founders").get()).docs.map(d => ({ uid: d.id, n: d.data().n })).sort((a, b) => a.n - b.n);
const label = u => (people[u] && people[u].username) || "(no profile yet)";
console.log("Current numbers:"); f.forEach(x => console.log(`  #${String(x.n).padStart(3, "0")}  ${label(x.uid)}`));
const order = (process.env.ORDER || "").split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
if(order.length){
  const byName = Object.fromEntries(Object.entries(people).map(([u, p]) => [String(p.username || "").toLowerCase(), u]));
  const first = order.map(n => byName[n]).filter(Boolean), missing = order.filter(n => !byName[n]);
  if(missing.length) { console.log("Not found:", missing.join(", ")); process.exit(1); }
  const rest = f.map(x => x.uid).filter(u => !first.includes(u)), all = [...first, ...rest].slice(0, 100);
  const batch = db.batch(); all.forEach((u, i) => batch.set(db.collection("founders").doc(u), { n: i + 1, at: Date.now() }));
  batch.set(db.collection("meta").doc("founders"), { next: all.length + 1 }); await batch.commit();
  console.log("New numbers:"); all.forEach((u, i) => console.log(`  #${String(i + 1).padStart(3, "0")}  ${label(u)}`));
}
