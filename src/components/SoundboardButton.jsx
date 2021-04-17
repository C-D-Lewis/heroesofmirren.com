import React, { useState, useEffect } from 'react';
import { getFavorites, setFavorites } from '../favorites';
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
const SoundboardButton = ({ loaded, data, onClick }) => {
  const { id, icon, label } = data;

  const [isFavorite, setIsFavorite] = useState(false);

  // Initialise favorites
  useEffect(() => {
    let favorites = getFavorites();
    if (!favorites) setFavorites([]);

    favorites = getFavorites();
    setIsFavorite(favorites.includes(id));
  }, []);

  return (
    <Container
      style={{
        backgroundColor: loaded ? 'white' : 'black',
        borderRadius: 10,
        width: BUTTON_WIDTH,
        margin: 5,
        opacity: loaded ? 1 : 0.2,
        transition: '1s',
        overflow: 'hidden',
        position: 'relative',
      }}>
      <img
        onClick={onClick}
        src={`./assets/icons/${icon}`}
        style={{
          width: '100%',
          height: BUTTON_HEIGHT,
          maxHeight: BUTTON_HEIGHT,
          objectFit: 'cover',
        }}/>
      <img
        onClick={() => {
          const favorites = getFavorites();
          const newState = !isFavorite;
          setIsFavorite(newState);

          // Add to list in localStorage
          setFavorites(newState ? [...favorites, id] : [...favorites.filter(p => p !== id)]);
        }}
        style={{
          position: 'absolute',
          width: 28,
          height: 28,
          right: 5,
          top: 5,
        }}
        src={`./assets/images/star_${isFavorite ? 'on' : 'off'}.png`}/>
      <span
        style={{
          fontSize: '0.8rem',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: 5,
          paddingLeft: 0,
        }}>
        {loaded ? label : '...'}
      </span>
    </Container>
  );
};

export default SoundboardButton;
