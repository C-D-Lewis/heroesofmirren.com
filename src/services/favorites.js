/**
 * Get the list of favorites from localStorage.
 *
 * @returns {Array<string>} Array of favorites by 'id', or empty if there are none.
 */
const loadFavorites = () => JSON.parse(localStorage.getItem('favorites') || '[]');

/**
 * Set the new list of favorites.
 *
 * @param {Array<string>} newFavorites - New list to use.
 */
const saveFavorites = (newFavorites) => localStorage.setItem('favorites', JSON.stringify(newFavorites));
