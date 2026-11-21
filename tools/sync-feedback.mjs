// Copies the owner's in-app feedback into GitHub issues (label "feedback") so a Claude session can work through it.
// Runs in GitHub Actions with the Firebase service account (GOOGLE_APPLICATION_CREDENTIALS) and gh (GH_TOKEN).
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { execFileSync } from "node:child_process";
import { writeFileSync, unlinkSync } from "node:fs";

const OWNER = process.env.OWNER_EMAIL, ALL = process.env.ALL_USERS === "true";
initializeApp({ credential: applicationDefault(), projectId: "boats-40d0f" });
const db = getFirestore();
const gh = (...a) => execFileSync("gh", a, { encoding: "utf8" });

const accounts = Object.fromEntries((await db.collection("accounts").get()).docs.map(d => [d.id, d.data()]));
const ownerUid = Object.keys(accounts).find(u => accounts[u].email === OWNER);
if(!ALL && !ownerUid){ console.log("Owner has no account record yet (open the site once while signed in)."); process.exit(0); }

const docs = ALL ? (await db.collection("feedback").get()).docs : [await db.collection("feedback").doc(ownerUid).get()];
const items = [];
for(const d of docs){ if(!d.exists) continue; let x = {}; try { x = JSON.parse(d.data().j || "{}"); } catch(e) {} for(const it of (x.items || [])) items.push({ ...it, uid: d.id }); }

try { gh("label", "create", "feedback", "--color", "2E9FD8", "--description", "From the in-app Feedback button", "--force"); } catch(e) {}
const existing = gh("issue", "list", "--label", "feedback", "--state", "all", "--limit", "1000", "--json", "body", "-q", ".[].body");
const seen = new Set([...existing.matchAll(/fb:([\w-]+:\d+)/g)].map(m => m[1]));

let made = 0;
for(const it of items.sort((a, b) => a.at - b.at)){
  const key = `${it.uid}:${it.at}`; if(seen.has(key)) continue;
  const who = it.uid === ownerUid ? "owner" : (accounts[it.uid]?.email || it.user || it.uid);
  const title = (it.text || "").replace(/\s+/g, " ").slice(0, 70) + ((it.text || "").length > 70 ? "…" : "");
  const body = [
    it.text || "", "",
    `**Screen:** ${it.where || "unknown"}`,
    `**App version:** ${it.build || "?"}`,
    `**When:** ${new Date(it.at).toISOString()}`,
    `**From:** ${who}`, "",
    `<!-- fb:${key} -->`,
  ].join("\n");
  writeFileSync("/tmp/fb-body.md", body);
  gh("issue", "create", "--title", title || "Feedback", "--label", "feedback", "--body-file", "/tmp/fb-body.md");
  made++;
}
try { unlinkSync("/tmp/fb-body.md"); } catch(e) {}
console.log(`Feedback items: ${items.length}, new issues: ${made}`);
