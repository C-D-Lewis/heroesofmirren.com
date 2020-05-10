import React, { useState, useEffect } from 'react';
import SoundboardButton from './SoundboardButton.jsx';

const SoundByte = ({ data }) => {
  const [audio, setAudio] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const newAudio = new Audio(`./assets/sounds/${data.sound}`);
    newAudio.addEventListener('canplay', () => setReady(true));
    setAudio(newAudio);
  }, []);

  return <SoundboardButton data={data} ready={ready} onClick={() => audio.play()} />;
};

export default SoundByte;
