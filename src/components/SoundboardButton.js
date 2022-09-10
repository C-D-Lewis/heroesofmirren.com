/* global Theme FavoritesService */

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
fabricate.declare('SoundboardButton', ({ data }) => {
  const { id, icon, label } = data;

  const isLoaded = fabricate.manageState('loadAudio', id, false);

  let isFavorite = FavoritesService.load().includes(id);

  /**
   * Get path to favorite icon depending on state.
   *
   * @returns {string} Icon path.
   */
  const getFavoriteIcon = () => `./assets/images/star_${isFavorite ? 'on' : 'off'}.png`;

  const container = fabricate.Column()
    .withStyles({
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

      // Update list in localStorage, either adding or deleting
      const favorites = FavoritesService.load();
      const newList = isFavorite ? [...favorites, id] : [...favorites.filter((p) => p !== id)];
      FavoritesService.save(newList);
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
      if (isLoaded.get()) setVisiblyLoaded();
    })
    .watchState(() => {
      // When this id has loaded, update display
      setVisiblyLoaded();
    }, [isLoaded.key]);

  return container;
});
