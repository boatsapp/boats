// Copies every Firebase Auth account into accounts/{uid} (email, name, sign-up and last-seen times)
// so the owner's Data center lists people who signed up before the app recorded this itself.
// Run on demand from GitHub Actions ("Sync accounts"); it only reads Auth and writes the accounts collection.
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
initializeApp({ credential: applicationDefault(), projectId: "boats-40d0f" });
const db = getFirestore(); let page, n = 0, added = 0;
do {
  const r = await getAuth().listUsers(1000, page); page = r.pageToken;
  for(const u of r.users){
    const ref = db.collection("accounts").doc(u.uid), old = await ref.get(), o = old.exists ? old.data() : {};
    const created = Date.parse(u.metadata.creationTime) || Date.now();
    const seen = Math.max(Date.parse(u.metadata.lastRefreshTime || "") || 0, Date.parse(u.metadata.lastSignInTime || "") || 0, o.lastAt || 0);
    await ref.set({ email: u.email || o.email || "", name: u.displayName || o.name || "", createdAt: Math.min(o.createdAt || created, created), lastAt: seen || created });
    n++; if(!old.exists) added++;
  }
} while(page);
console.log(`Accounts synced: ${n} (new records: ${added})`);
