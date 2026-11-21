const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const S='/tmp/claude-0/-home-user/78c7479e-6b72-5d19-99ff-f058488e24e0/scratchpad/';
async function user(name){ const ctx=await b.newContext({viewport:{width:375,height:812}}); const p=await ctx.newPage();
  p.on('pageerror',e=>errs.push(name+' PAGEERR '+e.message));
  await p.goto('http://localhost:8765/?emu=1'); await p.waitForSelector('#gate.ready',{timeout:15000});
  await p.evaluate(n=>window.__emuSignIn(n),name); await p.waitForFunction(()=>!document.getElementById('gate'),null,{timeout:15000});
  await p.waitForFunction(()=>window.S&&S.ready,null,{timeout:15000}).catch(()=>{});
  await p.waitForTimeout(1500);
  const info=await p.evaluate(()=>({mode:Store.mode,uid:Store.uid,note:Store.note}));
  console.log(name,'signed in',JSON.stringify(info));
  await p.evaluate(n=>{ A.login(); Object.assign(Pf,{onboarded:true,username:n}); Store.save(true); go('app',{tab:'today'}); },name);
  await p.waitForTimeout(2000); return {p,ctx,uid:info.uid}; }
const a=await user('alice'), bb=await user('bob');
// people visible
await a.p.waitForTimeout(1500);
console.log('alice sees bob card',await a.p.evaluate(u=>!!Social.people[u],bb.uid));
// DM alice -> bob
await a.p.evaluate(u=>{ const d=Social.dms[Social.me()]||{out:{}}; const out={...(d.out||{})}; out[u]=[{at:Date.now(),text:'yo bob'}]; Social.saveDms({out}); },bb.uid);
await bb.p.waitForTimeout(2500);
console.log('bob inbox from alice',await bb.p.evaluate(u=>JSON.stringify(((Social.dms[u]||{}).out||{})[Social.me()]||null),a.uid));
// post + comment
await a.p.evaluate(()=>Social.addPost({id:'p1',at:Date.now(),title:'Push day'}));
await bb.p.waitForTimeout(2000);
const key=a.uid+':p1';
console.log('bob sees post',await bb.p.evaluate(u=>((Social.posts[u]||{}).items||[]).length,a.uid));
await bb.p.evaluate(k=>{ const r=Social.myReacts(); r.likes[k]=true; (r.comments[k]=r.comments[k]||[]).push({at:Date.now(),text:'nice'}); Social.saveReacts(r,true); },key);
await a.p.waitForTimeout(2500);
console.log('alice sees like+comment',await a.p.evaluate(k=>Social.likes(k)+' / '+Social.comments(k).length,key));
// reload persistence
await a.p.reload(); await a.p.waitForFunction(()=>window.S&&S.ready&&S.route==='app',null,{timeout:20000}).catch(()=>{}); await a.p.waitForTimeout(1500);
console.log('alice after reload',await a.p.evaluate(()=>({route:S.route,tab:S.tab,user:Pf.username})));
await a.p.screenshot({path:S+'web-e2e.png'});
console.log(errs.join('\n')||'no page errors'); await b.close(); process.exit(0);})().catch(e=>{console.log('ERR',e.message);process.exit(1);});
