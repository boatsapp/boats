#!/usr/bin/env python3
"""Build the hosted site (web/public) from index.html, the single app source."""
import os, shutil
root=os.path.dirname(os.path.abspath(__file__)); web=os.path.join(root,'web'); pub=os.path.join(web,'public')
s=open(os.path.join(root,'index.html'),encoding='utf-8').read()
def rep(a,b):
    global s
    assert a in s, a[:80]; s=s.replace(a,b)
rep("const ARTIFACT_URL = 'https://claude.ai/artifact/XT3jUXgKFiYGwmpihToXXv';","const ARTIFACT_URL = location.origin;")
rep("'Connected to your Claude account'","'Synced to your account'")
rep("'Synced to your Claude account'","'Synced to your account'")
rep("Friends need your Claude account. Open Boats from its link while signed in.","Couldn’t connect. Check your internet and reopen Boats.")
rep("The feed needs your Claude account. Open Boats from its link while signed in.","Couldn’t connect. Check your internet and reopen Boats.")
rep(" Test version: messages aren't private yet.","")
rep("'Claude storage did not answer':'Could not reach Claude storage'","'Server did not answer':'Could not reach the server'")
rep("'Claude storage unavailable here'","'Storage unavailable'")
rep("'Not signed in to Claude'","'Not signed in'")
rep("if(S.route==='splash'){ const w=S.waiting; S.waiting=null; if(w) A.login(); else render(); }","if(S.route==='splash'){ S.waiting=null; A.login(); }")
rep('<meta name="claude:viewport-fit-sides" content="cover">\n','')
rep("<script>\n",'<script type="text/plain" id="appsrc">\n')
head='''<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#F5F4F0" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0E0E0D" media="(prefers-color-scheme: dark)">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Boats">
<meta name="description" content="Because who else is going to carry them. A simple lifting tracker with friends.">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="icon" href="/icon-192.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<style>html,body{margin:0;background:#F5F4F0}@media (prefers-color-scheme:dark){html,body{background:#0E0E0D}}
#gate{position:fixed;inset:0;z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:24px;background:#F5F4F0;color:#151514;font-family:Inter,system-ui,sans-serif;opacity:0;transition:opacity .25s}
#gate.ready{opacity:1}
#gate .logo{width:84px;height:84px;border-radius:22px;background:#151514;display:grid;place-items:center;margin-bottom:6px}
#gate .logo svg{width:48px;height:48px;fill:none;stroke:#fff;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
#gate h1{font:900 40px/1 "Inter Tight",Inter,system-ui,sans-serif;letter-spacing:.04em;margin:0}
#gate p{margin:0 0 18px;color:#6b6b66;font-size:15px;text-align:center}
#gate button{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;max-width:320px;height:52px;border-radius:14px;font:600 16px Inter,system-ui,sans-serif;cursor:pointer}
#gate .g{background:#fff;color:#151514;border:1px solid #dcdad3}
#gate .gerr{color:#D2462E;font-size:14px;min-height:18px}
#gate .fine{font-size:12px;color:#8a8a84;margin-top:8px}
@media (prefers-color-scheme:dark){#gate{background:#0E0E0D;color:#F4F3EF}#gate .logo{background:#F4F3EF}#gate .logo svg{stroke:#0E0E0D}#gate .g{background:#1c1c1a;color:#F4F3EF;border-color:#33332f}}
</style>
'''
gate='''
<div id="gate">
  <div class="logo"><svg viewBox="0 0 24 24"><path d="M3 15.5h18l-2.2 4H5.2z"/><path d="M12 3.5v12M12 4.5l6 9H12"/><path d="M12 7l-4.5 6.5H12"/></svg></div>
  <h1>BOATS</h1>
  <p>Because who else is going to carry them.</p>
  <button class="g" data-signin="google"><svg width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>Continue with Google</button>
  <div class="gerr"></div>
  <div class="fine">Sign in to save your workouts and see your friends.</div>
</div>
<script type="module" src="/shim.js"></script>
</body></html>
'''
s=head+'</head><body>\n'+s+gate
os.makedirs(pub,exist_ok=True)
open(os.path.join(pub,'index.html'),'w',encoding='utf-8').write(s)
import subprocess; subprocess.run(['npm','run','-s','build'],cwd=web,check=True)
open(os.path.join(pub,'manifest.webmanifest'),'w').write('''{
  "name": "Boats",
  "short_name": "Boats",
  "description": "Because who else is going to carry them.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F5F4F0",
  "theme_color": "#F5F4F0",
  "icons": [
    {"src": "/icon-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "/icon-512.png", "sizes": "512x512", "type": "image/png"},
    {"src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
  ]
}
''')
print('built', os.path.join(pub,'index.html'))
