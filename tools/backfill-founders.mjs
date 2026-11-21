// One-time: number the first 100 BOATS members by sign-up time (Firebase Auth creation time),
// keeping anyone who already has a number, then set meta/founders.next for new members.
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
initializeApp({ credential: applicationDefault(), projectId: "boats-40d0f" });
const db = getFirestore(), users = [];
let page; do { const r = await getAuth().listUsers(1000, page); users.push(...r.users); page = r.pageToken; } while(page);
users.sort((a, b) => new Date(a.metadata.creationTime) - new Date(b.metadata.creationTime));
const have = Object.fromEntries((await db.collection("founders").get()).docs.map(d => [d.id, d.data().n]));
const taken = new Set(Object.values(have)); let next = 1, made = 0;
for(const u of users){ if(have[u.uid]) continue; while(taken.has(next)) next++; if(next > 100) break;
  await db.collection("founders").doc(u.uid).set({ n: next, at: Date.now() }); taken.add(next); made++; }
while(taken.has(next)) next++;
await db.collection("meta").doc("founders").set({ next });
console.log(`Users: ${users.length}, numbered now: ${made}, next free number: ${next}`);
