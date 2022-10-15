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
      transition: '0.6s',
      overflow: 'hidden',
      position: 'relative',
    });

  const labelSpan = fabricate('span')
    .setStyles({
      fontSize: '0.7rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: '3px',
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
      width: '24px',
      height: '24px',
      right: '0px',
      top: '0px',
      backgroundColor: 'white',
      borderBottomLeftRadius: '10px',
      padding: '0px 0px 1px 2px',
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
    container.setStyles({
      backgroundColor: 'white',
      opacity: '1',
      cursor: 'pointer',
      boxShadow: Theme.styles.boxShadow,
    });
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
    .onUpdate(setVisiblyLoaded, [audioLoadedKey])
    .onHover((el, state, hovering) => {
      // Do nothing until loaded
      if (!state[audioLoadedKey]) return;

      el.setStyles({ boxShadow: hovering ? Theme.styles.boxShadowDark : Theme.styles.boxShadow });
    });

  return container;
});
