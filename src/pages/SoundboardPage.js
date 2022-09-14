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
 * SoundboardRow component.
 *
 * @returns {HTMLElement}
 */
const SoundboardRow = () => fabricate.Row()
  .withStyles({ justifyContent: 'center', padding: '5px' });

/**
 * Show just the sounds for the chosen category, in rows.
 *
 * @returns {Array<HTMLElement>} List of SoundByte or RandomSoundByte elements.
 */
const soundRowsForCategory = (category) => {
  const favorites = FavoritesService.load();
  const rowSize = fabricate.isMobile() ? 3 : 5;

  const soundList = Assets.sounds.filter(
    (p) => (category === 'favorites'
      // Just the favorites, regardless of category
      ? favorites.includes(p.id)
      // Sounds for this category
      : p.categories.includes(category) || category === 'all'),
  )
    .map(toSoundByte);

  const rows = [];
  const arr = [...soundList];
  while (arr.length) rows.push(arr.splice(0, rowSize));

  return rows.map((items) => SoundboardRow().withChildren(items));
};

/**
 * SoundboardPage component.
 *
 * @returns {HTMLElement}
 */
fabricate.declare('SoundboardPage', () => fabricate.Column()
  .withChildren([
    fabricate('SoundboardCategorySelect'),
    fabricate.Column()
      .withStyles({
        backgroundColor: 'white',
        padding: '0px 10px',
      })
      .watchState((el, state) => {
        el.clear();
        el.addChildren(soundRowsForCategory(state.category));
      }, ['favoritesUpdated', 'category'])
      .then((el, { category }) => {
        // Initial display
        el.addChildren(soundRowsForCategory(category));
      }),
  ]));
