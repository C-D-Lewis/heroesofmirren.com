import React, { useState, useEffect } from 'react';
import Container from './Container.jsx';

const SOUNTBYTE_WIDTH = 120;
const SOUNTBYTE_HEIGHT = 70;

const SoundByte = ({ data }) => {
  const [audio, setAudio] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const newAudio = new Audio(`./assets/sounds/${data.sound}`);
    newAudio.addEventListener('canplay', () => setReady(true));
    setAudio(newAudio);
  }, []);

  return (
    <Container
      onClick={() => audio.play()}
      style={{
        backgroundColor: ready ? 'white' : 'black',
        borderRadius: 10,
        width: SOUNTBYTE_WIDTH,
        margin: 5,
        opacity: ready ? 1 : 0,
        transition: '1s',
      }}>
      <img
        src={`./assets/icons/${data.icon}`}
        style={{
          width: '100%',
          height: SOUNTBYTE_HEIGHT,
          maxHeight: SOUNTBYTE_HEIGHT,
          objectFit: 'cover',
        }} />
      <span
        style={{
          fontSize: '0.8rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: 5,
          paddingLeft: 0,
        }}>
        {ready ? data.label : '...'}
      </span>
    </Container>
  );
};

export default SoundByte;
