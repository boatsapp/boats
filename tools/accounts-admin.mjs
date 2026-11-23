// Owner tool: list accounts (no emails printed) or delete one account and its data.
// ACTION=list | delete, UID=<uid to delete>
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
initializeApp({ credential: applicationDefault(), projectId: "boats-40d0f" });
const db = getFirestore(), auth = getAuth(), action = process.env.ACTION || "list", target = (process.env.UID || "").trim();
const mask = u => u ? String(u).slice(0,2) + "*".repeat(Math.max(1, String(u).length - 2)) : "-";
const unpack = d => { const x = d && d.data && d.data(); if(!x) return null; if(typeof x.j !== "string") return x; try { return JSON.parse(x.j); } catch(e) { return null; } };
if(action === "list"){
  const people = Object.fromEntries((await db.collection("people").get()).docs.map(d => [d.id, unpack(d) || {}]));
  const seen = new Set(); let page;
  do { const r = await auth.listUsers(1000, page); page = r.pageToken;
    for(const u of r.users){ seen.add(u.uid); const c = people[u.uid] || {}, prov = u.providerData.map(p => p.providerId).join("+") || "anonymous";
      const posts = (await db.collection("posts").doc(u.uid).get()).exists, data = (await db.collection(`users/${u.uid}/data`).limit(50).get()).size;
      console.log(`${u.uid} | provider=${prov} | email=${u.email ? "yes" : "no"} | username=${mask(c.username)} | hasName=${c.name ? "yes" : "no"} | created=${u.metadata.creationTime} | last=${u.metadata.lastRefreshTime || u.metadata.lastSignInTime} | profileDocs=${data} | posts=${posts}`); }
  } while(page);
  for(const [id, c] of Object.entries(people)) if(!seen.has(id)) console.log(`${id} | NO AUTH USER (card only) | username=${mask(c.username)}`);
} else if(action === "delete"){
  if(!target) throw new Error("UID is required");
  const del = async ref => { try { await ref.delete(); } catch(e) {} };
  const sub = await db.collection(`users/${target}/data`).get(); for(const d of sub.docs) await del(d.ref);
  for(const c of ["people","posts","reactions","feedback","accounts","founders"]) await del(db.collection(c).doc(target));
  for(const c of ["threads","dmphotos","photos"]){ const s = await db.collection(c).get(); for(const d of s.docs) if(d.id.startsWith(target + "_") || d.id.includes("_" + target)) await del(d.ref); }
  const un = await db.collection("usernames").where("uid", "==", target).get(); for(const d of un.docs) await del(d.ref);
  try { await auth.deleteUser(target); console.log("Auth user deleted"); } catch(e) { console.log("Auth user: " + e.code); }
  console.log(`Deleted account data for ${target}`);
}
