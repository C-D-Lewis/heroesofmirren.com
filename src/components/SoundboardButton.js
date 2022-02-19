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

  let isFavorite = getFavorites().includes(id);

  /**
   * Get path to favorite icon depending on state.
   *
   * @returns {string} Icon path.
   */
  const getFavoriteIcon = () => `./assets/images/star_${isFavorite ? 'on' : 'off'}.png`;

  return fabricate.Column()
    .withStyles({
      backgroundColor: 'lightgrey',
      borderRadius: 5,
      width: BUTTON_WIDTH,
      margin: 5,
      opacity: 0.2,
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
          height: BUTTON_HEIGHT,
          maxHeight: BUTTON_HEIGHT,
          objectFit: 'cover',
        }),
      fabricate('img')
        .onClick((el) => {
          // Update component state
          isFavorite = !isFavorite;
          el.withAttributes({ src: getFavoriteIcon() });

          // Update list in localStorage
          const favorites = getFavorites();
          setFavorites(isFavorite ? [...favorites, id] : [...favorites.filter(p => p !== id)]);
        })
        .withStyles({
          position: 'absolute',
          width: 28,
          height: 28,
          right: 5,
          top: 5,
        })
        .withAttributes({ src: getFavoriteIcon() }),
      fabricate('span')
        .withStyles({
          fontSize: '0.7rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: 5,
          paddingLeft: 0,
        })
        .setText('...'),
    ])
    .watchState((el, state) => {
      if (!state[`RandomSoundByte:loaded:${id}`]) return;

      // When this id has loaded, update display
      el.addStyles({
        backgroundColor: 'white',
        opacity: 1,
      });
      el.setText(label);
    });
};
