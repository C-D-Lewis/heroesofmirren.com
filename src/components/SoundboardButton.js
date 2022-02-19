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
const SoundboardButton = ({ data }) => {
  const { id, icon, label } = data;

  let isFavorite = loadFavorites().includes(id);

  /**
   * Get path to favorite icon depending on state.
   *
   * @returns {string} Icon path.
   */
  const getFavoriteIcon = () => `./assets/images/star_${isFavorite ? 'on' : 'off'}.png`;

  return fabricate.Column()
    .withStyles({
      backgroundColor: 'lightgrey',
      borderRadius: '5',
      width: `${BUTTON_WIDTH}px`,
      margin: '5px',
      opacity: '0.2',
      transition: '1s',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '2px 2px 3px 1px #5556',
    })
    .withChildren([
      fabricate('img')
        .withAttributes({ src: `./assets/icons/${icon}` })
        .withStyles({
          width: '100%',
          height: `${BUTTON_HEIGHT}px`,
          maxHeight: `${BUTTON_HEIGHT}px`,
          objectFit: 'cover',
        }),
      fabricate('img')
        .onClick((el) => {
          // Update component state
          isFavorite = !isFavorite;
          // TODO: addAttributes()
          el.withAttributes({ src: getFavoriteIcon() });

          // Update list in localStorage
          const favorites = loadFavorites();
          saveFavorites(isFavorite ? [...favorites, id] : [...favorites.filter(p => p !== id)]);
        })
        .withStyles({
          position: 'absolute',
          width: '28px',
          height: '28px',
          right: '5px',
          top: '5px',
        })
        .withAttributes({ src: getFavoriteIcon() }),
      fabricate('span')
        .withStyles({
          fontSize: '0.7rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '5px',
          paddingLeft: '0px',
        })
        .setText('...'),
    ])
    .watchState((el, state) => {
      if (!state[`SoundByte:loaded:${id}`]) return;

      // When this id has loaded, update display
      el.addStyles({
        backgroundColor: 'white',
        opacity: 1,
      });
      el.setText(label);
    });
};
