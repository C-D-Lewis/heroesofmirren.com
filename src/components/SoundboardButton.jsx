import React from 'react';
import Container from './Container.jsx';

/** Button width */
const BUTTON_WIDTH = 120;
/** Button height */
const BUTTON_HEIGHT = 70;

/**
 * SoundboardButton component, shared by SountByte and RandomSoundByte.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const SoundboardButton = ({ loaded, data, onClick }) => (
  <Container
    onClick={onClick}
    style={{
      backgroundColor: loaded ? 'white' : 'black',
      borderRadius: 10,
      width: BUTTON_WIDTH,
      margin: 5,
      opacity: loaded ? 1 : 0,
      transition: '1s',
      overflow: 'hidden',
    }}>
    <img
      src={`./assets/icons/${data.icon}`}
      style={{
        width: '100%',
        height: BUTTON_HEIGHT,
        maxHeight: BUTTON_HEIGHT,
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
      {loaded ? data.label : '...'}
    </span>
  </Container>
);

export default SoundboardButton;
