import React, { useState, useEffect } from 'react';
import SoundboardButton from './SoundboardButton.jsx';

/**
 * SountByte component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const SoundByte = ({ data }) => {
  const [audio, setAudio] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const newAudio = new Audio(`./assets/sounds/${data.sound}`);
    newAudio.addEventListener('canplaythrough', () => setLoaded(true));
    setAudio(newAudio);
  }, []);

  return <SoundboardButton data={data} loaded={loaded} onClick={() => audio.play()} />;
};

export default SoundByte;
