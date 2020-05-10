import React from 'react';
import Container from './Container.jsx';

const SOUNTBYTE_WIDTH = 120;
const SOUNTBYTE_HEIGHT = 70;

const SoundboardButton = ({ ready, data, onClick }) => (
  <Container
    onClick={onClick}
    style={{
      backgroundColor: ready ? 'white' : '#555',
      borderRadius: 10,
      width: SOUNTBYTE_WIDTH,
      margin: 5,
      opacity: ready ? 1 : 0,
      transition: '1s',
      overflow: 'hidden',
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

export default SoundboardButton;
