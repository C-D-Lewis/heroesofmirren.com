import React, { useState, useEffect } from 'react';
import { Sounds } from '../assets';
import Container from './Container.jsx'

const SoundByte = ({ data }) => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audioEl = new Audio(`./assets/sounds/${data.sound}`);
    setAudio(audioEl);
  }, []);

  return (
    <Container
      onClick={() => audio.play()}
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        maxWidth: 120,
        margin: 5,
      }}>
      <img
        src={`./assets/icons/${data.icon}`}
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: 70,
        }} />
      <span
        style={{
          fontSize: '0.8rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: 5,
        }}>
        {data.label}
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
