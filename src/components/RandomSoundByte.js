/**
 * Icon showing sound is randomised.
 *
 * @returns {HTMLElement}
 */
const RandomIcon = () => fabricate('Image', { src: 'assets/images/shuffle.png' })
  .setStyles({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '24px',
    height: '24px',
    backgroundColor: 'white',
    borderBottomRightRadius: '10px',
    padding: '0px 2px 1px 0px',
  });

/**
 * RandomSoundByte component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
fabricate.declare('RandomSoundByte', ({ data }) => {
  const { id, max, soundPrefix } = data;

  let lastIndex = 0;

  /**
   * Play a random sound.
   */
  const playRandomSound = async () => {
    let next = lastIndex;
    while (next === lastIndex) {
      next = Math.round(Math.random() * (max - 1));
    }
    lastIndex = next;

    const audio = await AudioService.loadAudio(id, `${soundPrefix}${next + 1}`);
    audio.play();
  };

  // TODO Show shuffle icon

  return fabricate('SoundboardButton', { data })
    .addChildren([RandomIcon()])
    .onClick(playRandomSound)
    .onCreate(() => AudioService.loadAudio(id, `${soundPrefix}1`));
});
