/* global AudioService */

/**
 * RandomSoundByte component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
fabricate.declare('RandomSoundByte', ({ data }) => {
  const { id, max, soundPrefix } = data;

  /**
   * Play a random sound.
   */
  const playRandomSound = async () => {
    const index = Math.round(Math.random() * (max - 1));
    const audio = await AudioService.loadAudio(id, `${soundPrefix}${index + 1}`);
    audio.play();
  };

  // TODO Show shuffle icon

  return fabricate('SoundboardButton', { data })
    .onClick(playRandomSound)
    .then(() => AudioService.loadAudio(id, `${soundPrefix}1`));
});
