import React from 'react';
import Container from './Container.jsx';
import { Colors } from '../theme';

/**
 * Pill component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Pill = ({ children, onClick, isSelected }) => (
  <div
    style={{
      borderRadius: 50,
      backgroundColor: Colors.primary,
      padding: '8px 12px',
      color: isSelected ? 'white': '#555',
      margin: 5,
      cursor: 'pointer',
    }}
    onClick={onClick}>
    {children}
  </div>
);

/**
 * SoundboardCategorySelect component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const SoundboardCategorySelect = ({ category, setCategory }) => (
  <Container
    style={{
      flexDirection: 'row',
      backgroundColor: 'black',
      padding: 10,
    }}>
    <Pill
      isSelected={category === 'all'}
      onClick={() => setCategory('all')}>
      All
    </Pill>
    <Pill
      isSelected={category === 'favorites'}
      onClick={() => setCategory('favorites')}>
      Favorites
    </Pill>
    <Pill
      isSelected={category === 'ia'}
      onClick={() => setCategory('ia')}>
      IA
    </Pill>
    <Pill
      isSelected={category === 'dnd'}
      onClick={() => setCategory('dnd')}>
      D&D
    </Pill>
    <Pill
      isSelected={category === 'songs'}
      onClick={() => setCategory('songs')}>
      Songs
    </Pill>
  </Container>
);

export default SoundboardCategorySelect;
