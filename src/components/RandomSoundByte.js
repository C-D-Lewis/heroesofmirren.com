/**
 * RandomSoundByte component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const RandomSoundByte = ({ data }) => {
  const { id, max, soundPrefix } = data;

  /**
   * Play a random sound.
   */
  const playRandomSound = async () => {
    const index = Math.round(Math.random() * (max - 1));
    const audio = await loadAudio(id, `${soundPrefix}${index + 1}`);
    audio.play();
  };

  return SoundboardButton({ data })
    .onClick(playRandomSound)
    .then(() => loadAudio(id, `${soundPrefix}1`));
};
