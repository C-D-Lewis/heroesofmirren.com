/** Button width */
const BUTTON_WIDTH = 110;
/** Button height */
const BUTTON_HEIGHT = 70;

/**
 * Get path to favorite icon depending on state.
 *
 * @param {boolean} isFavorite - true if this sound is a favorite.
 * @returns {string} Icon path.
 */
const getFavoriteIcon = (isFavorite) => `./assets/images/star_${isFavorite ? 'on' : 'off'}.png`;

/**
 * SoundboardButton component, shared by SountByte and RandomSoundByte.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
fabricate.declare('SoundboardButton', ({ data }) => {
  const { id, icon, label } = data;

  const audioLoadedKey = Utils.audioLoadedKey(id);
  const isFavoriteKey = Utils.isFavoriteKey(id);

  const container = fabricate('Column')
    .setStyles({
      backgroundColor: 'lightgrey',
      borderRadius: '5px',
      width: `${BUTTON_WIDTH}px`,
      margin: '5px',
      opacity: '0.2',
      transition: '1s',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: Theme.styles.boxShadow,
    });

  const labelSpan = fabricate('span')
    .setStyles({
      fontSize: '0.7rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: '5px',
      paddingLeft: '0px',
    })
    .setText('...');

  const buttonIcon = fabricate('Image', { src: `./assets/icons/${icon}` })
    .setStyles({
      width: '100%',
      height: `${BUTTON_HEIGHT}px`,
      maxHeight: `${BUTTON_HEIGHT}px`,
      objectFit: 'cover',
    });

  const favoriteButton = fabricate('Image', { src: getFavoriteIcon(false) })
    .onClick((el, state) => {
      const isFavorite = !state[isFavoriteKey];

      // Update list in localStorage, either adding or deleting
      const favorites = FavoritesService.load();
      const newList = isFavorite ? [...favorites, id] : [...favorites.filter((p) => p !== id)];
      FavoritesService.save(newList);

      // Update app state
      fabricate.update({
        [isFavoriteKey]: isFavorite,
        favoritesUpdated: Date.now(),
      });
    })
    .setStyles({
      position: 'absolute',
      width: '28px',
      height: '28px',
      right: '5px',
      top: '5px',
    })
    .onUpdate((el, state) => {
      el.setAttributes({ src: getFavoriteIcon(state[isFavoriteKey]) });
    }, [isFavoriteKey])
    .onCreate((el, state) => {
      // Re-created each time 'category' changes
      el.setAttributes({ src: getFavoriteIcon(state[isFavoriteKey]) });
    });

  /**
   * Set the visibly loaded state.
   */
  const setVisiblyLoaded = () => {
    container.setStyles({ backgroundColor: 'white', opacity: '1' });
    labelSpan.setText(label);
  };

  // Allow assignment to complete
  container
    .setChildren([
      buttonIcon,
      favoriteButton,
      labelSpan,
    ])
    .onCreate((el, state) => {
      // If already loaded
      if (state[audioLoadedKey]) setVisiblyLoaded();
    })
    .onUpdate(setVisiblyLoaded, [audioLoadedKey]);

  return container;
});
