import React, { useState, useEffect } from 'react';
import SoundboardButton from './SoundboardButton.jsx';

const loadAudio = (data, index) => new Promise((resolve, reject) => {
  const newAudio = new Audio(`./assets/sounds/${data.soundPrefix}${index + 1}.mp3`);
  newAudio.addEventListener('canplay', () => resolve(newAudio));
});

const RandomSoundByte = ({ data }) => {
  const [audioList, setAudioList] = useState([]);
  const [ready, setReady] = useState(false);

  // Load the first audio
  useEffect(() => {
    const loadFirstAudio = async () => {
      const newAudio = await loadAudio(data, 0);
      setAudioList([...audioList, newAudio]);
      setReady(true);
    };

    loadFirstAudio();
  }, []);

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

  return <SoundboardButton data={data} ready={ready} onClick={playRandomSound} />;
};

export default RandomSoundByte;
