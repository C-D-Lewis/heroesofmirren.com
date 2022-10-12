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
const SoundboardRow = () => fabricate('Row')
  .setStyles({ justifyContent: 'center', padding: '5px' });

/**
 * Show just the sounds for the chosen category, in rows.
 *
 * @returns {Array<HTMLElement>} List of SoundByte or RandomSoundByte elements.
 */
const SoundRowsForCategory = (category) => {
  const favorites = FavoritesService.load();
  const rowSize = fabricate.isNarrow() ? 3 : 5;

  // Update app state with favorites list - relies on 'favorites' being a list of IDs
  fabricate.update(Utils.isFavoriteKey(favorites), true);

  const soundList = Assets.sounds.filter(
    (p) => (category === 'favorites'
      // Just the favorites, regardless of category
      ? favorites.includes(p.id)
      // Sounds for this category and 'all'
      : p.categories.includes(category) || category === 'all'),
  );

  const rows = [];
  const arr = [...soundList];
  while (arr.length) rows.push(arr.splice(0, rowSize));
  return rows.map((items) => SoundboardRow().setChildren(items.map(toSoundByte)));
};

/**
 * SoundboardPage component.
 *
 * @returns {HTMLElement}
 */
fabricate.declare('SoundboardPage', () => fabricate('Column')
  .setChildren([
    fabricate('SoundboardCategorySelect'),
    fabricate('Column')
      .setStyles({ backgroundColor: 'white', padding: '0px 10px' })
      .onUpdate((el, { tab, category }) => {
        // Don't load sounds when gallery is shown first
        if (tab !== 'soundboard') return;

        el.setChildren(SoundRowsForCategory(category));
      }, ['fabricate:init', 'favoritesUpdated', 'category', 'tab']),
  ]));
