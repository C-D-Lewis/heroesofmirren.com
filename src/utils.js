const Utils = {};

/**
* Get a query param.
*
* @param {string} name - Parameter name.
* @returns {string|undefined} Value if found.
*/
Utils.getQueryParam = (name) => new URLSearchParams(window.location.search).get(name);

/**
 * Build state key for a specific audioLoaded state.
 *
 * @param {string} id - Audio ID.
 * @returns {string} State key.
 */
Utils.audioLoadedKey = (id) => `audioLoaded:${id}`;

/**
 * Build state key for a specific isFavorite state.
 *
 * @param {string} id - Audio ID.
 * @returns {string} State key.
 */
Utils.isFavoriteKey = (id) => `isFavorite:${id}`;
