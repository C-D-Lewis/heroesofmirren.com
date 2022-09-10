/* global FavoritesService Assets */

/**
 * To sound byte, depending on type.
 *
 * @param {object} data - Object from assets.js
 * @returns {HTMLElement}
 */
const toSoundByte = (data) => (data.sound
  ? fabricate('SoundByte', { data })
  : fabricate('RandomSoundByte', { data }));

/**
 * SoundboardPage component.
 *
 * @returns {HTMLElement}
 */
fabricate.declare('SoundboardPage', () => {
  /**
   * Show just the sounds for the chosen category.
   *
   * @returns {Array<HTMLElement>} List of SoundByte or RandomSoundByte elements.
   */
  const soundsForCategory = (category) => {
    const favorites = FavoritesService.load();

    // Just the favorites, regardless of category
    if (category === 'favorites') return Assets.sounds.filter((p) => favorites.includes(p.id)).map(toSoundByte);

    // Sounds for this category
    return Assets.sounds
      .filter((p) => p.categories.includes(category) || category === 'all')
      .map(toSoundByte);
  };

  return fabricate('div')
    .withStyles({ height: '100%' })
    .withChildren([
      fabricate('SoundboardCategorySelect'),
      fabricate.Row()
        .withStyles({
          flexWrap: 'wrap',
          backgroundColor: 'white',
          padding: '10px',
        })
        .withChildren(soundsForCategory(fabricate.getState('category')))
        .watchState((el, state) => {
          el.clear();
          el.addChildren(soundsForCategory(state.category));
        }, ['favoritesUpdated', 'category']),
    ]);
});
