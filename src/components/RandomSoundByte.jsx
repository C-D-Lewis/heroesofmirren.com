import React, { useState, useEffect } from 'react';
import Container from './Container.jsx';

const SOUNTBYTE_WIDTH = 120;
const SOUNTBYTE_HEIGHT = 70;

const loadAudio = (data, index) => new Promise((resolve, reject) => {
  const newAudio = new Audio(`./assets/sounds/${data.soundPrefix}${index + 1}.mp3`);
  newAudio.addEventListener('canplay', () => resolve(newAudio));
});

const RandomSoundByte = ({ data }) => {
  const [audioList, setAudioList] = useState([]);
  const [ready, setReady] = useState(false);

  // Load the first audio
  useEffect(async () => {
    const newAudio = await loadAudio(data, 0);
    setAudioList([...audioList, newAudio]);
    setReady(true);
  }, []);

  return (
    <Container
      onClick={async () => {
        const index = Math.round(Math.random() * (data.max - 1));

        // If it's loaded
        if (audioList[index]) {
          audioList[index].play();
          return;
        }

        const newAudio = await loadAudio(data, index);
        newAudio.play();
        setAudioList([...audioList, newAudio]);
      }}
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

export default RandomSoundByte;
