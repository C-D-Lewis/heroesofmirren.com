/**
 * SountByte component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const SoundByte = ({ data }) => {
  let audio = null;

  /**
   * Load the audio file.
   */
  const loadAudio = () => {
    audio = new Audio(`./assets/sounds/${data.sound}`);
    audio.addEventListener('canplaythrough', () => setLoaded(true));

    fabricate.updateState(`SoundByte:loaded:${data.id}`)
  };

  return SoundboardButton({ data })
    .onClick(playRandomSound)
    .then(loadAudio);
};
