/**
 * Get a query param.
 *
 * @param {string} name - Parameter name.
 * @returns {string|undefined} Value if found.
 */
// eslint-disable-next-line import/prefer-default-export
export const getQueryParam = (name: string) => new URLSearchParams(window.location.search)
  .get(name);
