/* global loadFavorites saveFavorites */

/** Button width */
const BUTTON_WIDTH = 110;
/** Button height */
const BUTTON_HEIGHT = 70;

/**
 * SoundboardButton component, shared by SountByte and RandomSoundByte.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
// eslint-disable-next-line no-unused-vars
const SoundboardButton = ({ data }) => {
  const { id, icon, label } = data;

  // TODO manageState
  const thisUpdateKey = `audioLoaded:${id}`;
  let isFavorite = loadFavorites().includes(id);
  let container;

  /**
   * Get path to favorite icon depending on state.
   *
   * @returns {string} Icon path.
   */
  const getFavoriteIcon = () => `./assets/images/star_${isFavorite ? 'on' : 'off'}.png`;

  const labelSpan = fabricate('span')
    .withStyles({
      fontSize: '0.7rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: '5px',
      paddingLeft: '0px',
    })
    .setText('...');

  /**
   * Set the visibly loaded state.
   */
  const setVisiblyLoaded = () => {
    container.addStyles({
      backgroundColor: 'white',
      opacity: '1',
    });
    labelSpan.setText(label);
  };

  container = fabricate.Column()
    .withStyles({
      backgroundColor: 'lightgrey',
      borderRadius: '5px',
      width: `${BUTTON_WIDTH}px`,
      margin: '5px',
      opacity: '0.2',
      transition: '1s',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '2px 2px 3px 1px #5556',
    });

  const buttonIcon = fabricate('img')
    .withAttributes({ src: `./assets/icons/${icon}` })
    .withStyles({
      width: '100%',
      height: `${BUTTON_HEIGHT}px`,
      maxHeight: `${BUTTON_HEIGHT}px`,
      objectFit: 'cover',
    });

  const favoriteButton = fabricate('img')
    .onClick((el) => {
      // Update component state
      isFavorite = !isFavorite;
      el.withAttributes({ src: getFavoriteIcon() });

      // Update list in localStorage
      const favorites = loadFavorites();
      saveFavorites(isFavorite ? [...favorites, id] : [...favorites.filter((p) => p !== id)]);
      fabricate.updateState('favoritesUpdated', () => Date.now());
    })
    .withStyles({
      position: 'absolute',
      width: '28px',
      height: '28px',
      right: '5px',
      top: '5px',
    })
    .withAttributes({ src: getFavoriteIcon() });

  // Allow assignment to complete
  container.addChildren([
    buttonIcon,
    favoriteButton,
    labelSpan,
  ])
    .then(() => {
      // If it's already loaded previously
      if (fabricate.getState(thisUpdateKey)) setVisiblyLoaded();
    })
    .watchState((el, state, updatedKey) => {
      if (updatedKey !== thisUpdateKey) return;

      // // When this id has loaded, update display
      setVisiblyLoaded();
    });

  return container;
};
