/**
 * Load an audio file by index using the prefix.
 *
 * @param {object} data - Data from assets.js item.
 * @param {number} index - File index.
 * @returns {Promise<Audio>} The Audio element.
 */
const loadAudio = (data, index) => new Promise((resolve) => {
  const uri = `./assets/sounds/${data.soundPrefix}${index + 1}.mp3`;
  const newAudio = new Audio(uri);
  newAudio.addEventListener('canplaythrough', () => resolve(newAudio));
});

/**
 * RandomSoundByte component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const RandomSoundByte = ({ data }) => {
  const audioList = [];

  /**
   * Load the first audio sample.
   */
  const loadFirstAudio = async () => {
    audioList.push(await loadAudio(data, 0));

    fabricate.updateState(`SoundByte:loaded:${data.id}`, () => true);
  };

  /**
   * Play a random sound.
   */
  const playRandomSound = async () => {
    const index = Math.round(Math.random() * (data.max - 1));

    // If it's already loaded
    if (audioList[index]) {
      audioList[index].play();
      return;
    }

    // Load it now
    const newAudio = await loadAudio(data, index);
    newAudio.play();
    audioList.push(newAudio);
  };

  return SoundboardButton({ data })
    .onClick(playRandomSound)
    .then(loadFirstAudio);
};
