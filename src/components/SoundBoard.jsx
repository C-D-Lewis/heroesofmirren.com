import React, { useState, useEffect } from 'react';
import { Sounds } from '../assets';
import Container from './Container.jsx'

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
        backgroundColor: 'white',
        borderRadius: 10,
        width: 120,
        margin: 5,
      }}>
      <img
        src={`./assets/icons/${data.icon}`}
        style={{
          width: '100%',
          height: 70,
          maxHeight: 70,
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

const SoundBoard = () =>
  <Container
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'black',
      padding: 10,
    }}>
    {Sounds.map(item => <SoundByte key={item.label} data={item} />)}
  </Container>

export default SoundBoard;
