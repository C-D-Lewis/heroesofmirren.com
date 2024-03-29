/**
 * Check an URL is cached.
 *
 * @param request Request to check
 * @returns Response from cache or network.
 */
const checkCache = async (request) => {
  try {
    const cached = await caches.match(request);
    if (cached) {
      console.log(`HIT: ${request.url}`);
      return cached;
    }

    const res = await fetch(request, {
      headers: {
        Range: undefined,
      },
    });

    if (res.status === 206) {
      res = res.clone();
      res.status = 200;
    }

    // Add to cache
    const cache = await caches.open("v1");
    await cache.put(request, res.clone());
    console.log(`MISS: ${request.url}`);

    return res;
  } catch (e) {
    console.error(e);
  }
};

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  // Intercept requests for audio files
  if (!event.request.url.match(/\.(mp3|wav)$/)) return;

  event.respondWith(checkCache(event.request));
});
