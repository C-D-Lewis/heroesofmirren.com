import React, { useState, useEffect } from 'react';
import SoundboardButton from './SoundboardButton.jsx';

/**
 * Load an audio file by index using the prefix.
 *
 * @param {Object} data - Data from assets.js item.
 * @param {number} index - File index.
 * @returns {Promise<Audio>} The Audio element.
 */
const loadAudio = (data, index) => new Promise((resolve, reject) => {
  const uri = `./assets/sounds/${data.soundPrefix}${index + 1}.mp3`;
  const newAudio = new Audio(uri);
  newAudio.addEventListener('canplay', () => resolve(newAudio));
});

/**
 * RandomSoundByte component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const RandomSoundByte = ({ data }) => {
  const [audioList, setAudioList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load the first audio
  useEffect(() => {
    const loadFirstAudio = async () => {
      const newAudio = await loadAudio(data, 0);
      setAudioList([...audioList, newAudio]);
      setLoaded(true);
    };

    loadFirstAudio();
  }, []);

  /**
   * Play a random sound.
   */
  const playRandomSound = async () => {
    const index = Math.round(Math.random() * (data.max - 1));
    if (audioList[index]) {
      // If it's loaded
      audioList[index].play();
      return;
    }

    const newAudio = await loadAudio(data, index);
    newAudio.play();
    setAudioList([...audioList, newAudio]);
  };

  return <SoundboardButton data={data} loaded={loaded} onClick={playRandomSound} />;
};

export default RandomSoundByte;
