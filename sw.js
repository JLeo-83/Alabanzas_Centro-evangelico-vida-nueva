/* ============================================================
    sw.js — Service Worker
    Guarda el sitio en caché para que funcione sin conexión
   ============================================================ */

const CACHE_NAME = "vidanueva-v1";

/* Archivos que se guardan en caché al instalar */
const ARCHIVOS = [
    "/",
    "/index.html",
    "/canciones.html",
    "/letra.html",
    "/404.html",
    "/style.css",
    "/script.js",
    "/songs.js",
    "/verses.js",
    "/theme.js",
    "/manifest.json",
    "/assets/logo-full-dark.webp",
    "/assets/logo-full-light.webp",
    "/assets/logo-icon-dark.webp",
    "/assets/logo-icon-light.webp",
    "/assets/logo-banner.webp",
    "/assets/icon-192.png",
    "/assets/icon-512.png"
];

/* Instala el service worker y guarda los archivos en caché */
self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(ARCHIVOS);
        })
    );
    self.skipWaiting();
});

/* Limpia cachés viejos cuando se activa una versión nueva */
self.addEventListener("activate", function (e) {
    e.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(
                keys.filter(function (key) {
                    return key !== CACHE_NAME;
                }).map(function (key) {
                    return caches.delete(key);
                })
            );
        })
    );
    self.clients.claim();
});

/* Intercepta peticiones: primero busca en caché, si no hay va a la red */
self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (cached) {
            return cached || fetch(e.request);
        })
    );
});