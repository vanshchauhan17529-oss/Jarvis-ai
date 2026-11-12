const CACHE_NAME = "jarvis-ai-v1";
const APP_URL = "/Jarvis-ai/";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (
    request.method === "GET" &&
    new URL(request.url).origin === self.location.origin &&
    request.mode === "navigate"
  ) {
    event.respondWith(
      fetch(request).catch(() =>
        caches.match(APP_URL + "index.html")
      )
    );
  }
});
