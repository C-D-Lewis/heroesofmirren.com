/* global AudioService */

/**
 * SountByte component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
fabricate.declare('SoundByte', ({ data }) => {
  const { id, sound } = data;
  let audio;

  AudioService.loadAudio(id, sound).then((a) => {
    audio = a;
  });

  return fabricate('SoundboardButton', { data }).onClick(() => audio.play());
});
