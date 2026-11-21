// BOATS service worker: makes the site installable and shows the last loaded page if the network drops.
// It only touches page navigations; everything else (Firebase, photos) goes straight to the network.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if(e.request.mode !== "navigate") return;
  const home = new URL(e.request.url).pathname === "/";
  e.respondWith(fetch(e.request).then(r => { if(home && r.ok){ const c = r.clone(); caches.open("boats-pages").then(x => x.put("/", c)).catch(() => {}); } return r; })
    .catch(() => home ? caches.match("/").then(r => r || Response.error()) : Response.error()));
});
