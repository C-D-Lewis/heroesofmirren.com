/**
 * SountByte component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const SoundByte = ({ data }) => {
  const { id, sound } = data;
  let audio;

  loadAudio(id, sound).then(a => (audio = a));

  return SoundboardButton({ data }).onClick(() => audio.play());
};
