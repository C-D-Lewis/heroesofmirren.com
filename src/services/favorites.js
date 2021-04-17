/**
 * Get the list of favorites from localStorage.
 *
 * @returns {Array<string>} Array of favorites by 'id'
 */
export const getFavorites = () => JSON.parse(localStorage.getItem('favorites') || '[]');

/**
 * Set the new list of favorites.
 *
 * @param {Array<string>} newFavorites - New list to use.
 */
export const setFavorites = (newFavorites) => localStorage.setItem('favorites', JSON.stringify(newFavorites));
