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
rep('<title>Boats</title>','<title>BOATS Beta</title>')
rep("'Synced to your Claude account'","'Synced to your account'")
rep("Friends need your Claude account. Open Boats from its link while signed in.","Couldn’t connect. Check your internet and reopen Boats.")
rep("The feed needs your Claude account. Open Boats from its link while signed in.","Couldn’t connect. Check your internet and reopen Boats.")
rep("'Claude storage did not answer':'Could not reach Claude storage'","'Server did not answer':'Could not reach the server'")
rep("'Claude storage unavailable here'","'Storage unavailable'")
rep("'Not signed in to Claude'","'Not signed in'")
rep("if(S.route==='splash'){ const w=S.waiting; S.waiting=null; if(w) A.login(); else render(); }","if(S.route==='splash'){ S.waiting=null; if(Store.mode==='cloud') A.login(); else render(); }")
rep('<meta name="claude:viewport-fit-sides" content="cover">\n','')
rep("<script>\n",'<script type="text/plain" id="appsrc">\n')
rep("""<button class="btn soonbtn" data-a="soon" data-v="Google">Continue with Google<span class="soontag">Coming soon</span></button>
        <button class="btn primary" data-a="login">${S.waiting?'Connecting…':'Continue as guest'}</button>
        <p class="fine">Free to use. Apple and Google sign-in arrive with the phone app. Until then you continue as a guest.</p>""",
 """${Store.mode==='cloud'?`<button class="btn primary" data-a="login">Continue</button>`:`<button class="btn gbtn" data-a="g-in" ${S.signing||!S.ready?'disabled':''}>GLOGO${S.signing?'Signing in…':'Continue with Google'}</button>`}
        <p class="fine">Free to use. Sign in with Google to save your workouts and see your friends. Apple sign-in is coming soon.</p>""".replace('GLOGO','<svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>'))
rep("soon(v){ toast(`${v} sign-in is coming soon. Continue as guest for now.`); },","soon(v){ toast(`${v} sign-in isn't ready yet. Use Google for now.`); },")
rep("Store.mode==='cloud' ? 'Synced to your account' : `Saving on this device only${Store.note?' ('+Store.note+')':''}`","Store.mode==='cloud' ? 'Signed in' : Store.note==='Not signed in' ? 'Not signed in' : `Offline${Store.note?' ('+Store.note+')':''}`")
rep(".btn.soonbtn{",".btn.gbtn{gap:10px}\n.btn.soonbtn{")
head='''<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#F5F4F0" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0E0E0D" media="(prefers-color-scheme: dark)">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="BOATS Beta">
<meta name="description" content="Because who else is going to carry them. A simple lifting tracker with friends.">
<meta property="og:type" content="website">
<meta property="og:title" content="BOATS Beta">
<meta property="og:description" content="A workout tracker you can use with your friends. Log your lifts, see your progress, and share workouts with your crew.">
<meta property="og:image" content="https://carrytheboats.app/icon-512.png">
<meta property="og:url" content="https://carrytheboats.app/">
<meta name="twitter:card" content="summary">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="icon" href="/icon-192.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<style>html,body{margin:0;background:#0E0E0D}</style>
'''
gate='''
<script type="module" src="/shim.js"></script>
</body></html>
'''
# Static footer in the page HTML so Google's verification check (which doesn't run JavaScript) sees what BOATS is and the policy links
foot='<p class="legal" id="sitefoot">BOATS is a workout tracker you use with friends. By continuing you agree to the <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.</p>\n'
# Boat animation while the app starts (replaced by the first screen as soon as it renders)
boot=('<div class="bootload" role="status" aria-label="Loading BOATS"><div class="floatboat bigboat" aria-hidden="true">'
  '<span class="pboat"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 15.5h18l-2.2 4H5.2z"/><path d="M12 3.5v12M12 4.5l6 9H12"/><path d="M12 7l-4.5 6.5H12"/></svg></span>'
  '<span class="pwave"><svg viewBox="0 0 120 10" width="120" height="10" aria-hidden="true"><path d="M0 5 Q7.5 0 15 5 T30 5 T45 5 T60 5 T75 5 T90 5 T105 5 T120 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span></div></div>')
s=s.replace('<div id="app"></div>','<div id="app">'+boot+'</div>\n'+foot,1)
s=head+'</head><body>\n'+s+gate
os.makedirs(pub,exist_ok=True)
open(os.path.join(pub,'index.html'),'w',encoding='utf-8').write(s)
import subprocess; subprocess.run(['npm','run','-s','build'],cwd=web,check=True)
open(os.path.join(pub,'manifest.webmanifest'),'w').write('''{
  "name": "BOATS Beta",
  "short_name": "BOATS Beta",
  "description": "Because who else is going to carry them.",
  "id": "/",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "background_color": "#0E0E0D",
  "theme_color": "#F5F4F0",
  "icons": [
    {"src": "/icon-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "/icon-512.png", "sizes": "512x512", "type": "image/png"},
    {"src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
  ]
}
''')
print('built', os.path.join(pub,'index.html'))
