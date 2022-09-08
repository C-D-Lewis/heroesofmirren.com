/* global loadAudio SoundboardButton */

/**
 * SountByte component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
// eslint-disable-next-line no-unused-vars
const SoundByte = ({ data }) => {
  const { id, sound } = data;
  let audio;

  loadAudio(id, sound).then((a) => {
    audio = a;
  });

  return SoundboardButton({ data }).onClick(() => audio.play());
};
