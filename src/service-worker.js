// src/service-worker.js
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// Precache the manifest files
precacheAndRoute(self.__WB_MANIFEST);

// Cache images using CacheFirst strategy
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

// Ensure that all navigation requests are served with index.html
const handler = createHandlerBoundToURL('/index.html');
registerRoute(({ request }) => request.mode === 'navigate', handler);
self.addEventListener('install', () => {
    console.log('Service Worker installing.');
})
  
self.addEventListener('activate', () => {
    console.log('Service Worker activating.');
})
  
self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
})