/**
 * Get a query param.
 *
 * @param {string} name - Parameter name.
 * @returns {string|undefined} Value if found.
 */
// eslint-disable-next-line import/prefer-default-export
export const getQueryParam = (name: string) => new URLSearchParams(window.location.search)
  .get(name);

/**
 * Register cache service worker.
 */
export const registerServiceWorker = async () => {
  if (!navigator.serviceWorker) {
    console.log('Service worker not supported');
    return;
  }

  try {
    const res = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
    if (res.installing) {
      console.log('Service worker installing');
    } else if (res.waiting) {
      console.log('Service worker installed');
    } else if (res.active) {
      console.log('Service worker active');
    }
  } catch (e) {
    console.log(e);
    alert(`Service worker registration failed ${e}`);
  }
};
