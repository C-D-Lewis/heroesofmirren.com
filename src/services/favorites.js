/**
 * Get the list of favorites from localStorage.
 *
 * @returns {Array<string>} Array of favorites by 'id', or empty if there are none.
 */
// eslint-disable-next-line no-unused-vars
const loadFavorites = () => JSON.parse(localStorage.getItem('favorites') || '[]');

/**
 * Set the new list of favorites.
 *
 * @param {Array<string>} newFavorites - New list to use.
 */
// eslint-disable-next-line no-unused-vars
const saveFavorites = (newFavorites) => localStorage.setItem('favorites', JSON.stringify(newFavorites));
