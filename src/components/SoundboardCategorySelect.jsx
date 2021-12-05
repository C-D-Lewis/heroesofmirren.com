import React from 'react';
import Container from './Container.jsx';
import { Colors } from '../theme';

/**
 * Pill component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Pill = ({ children, onClick, isSelected, vPad = 8 }) => (
  <div
    style={{
      borderRadius: 50,
      backgroundColor: Colors.primary,
      padding: `${vPad}px 12px`,
      color: isSelected ? 'white': '#555',
      margin: 5,
      cursor: 'pointer',
      fontWeight: 'bold',
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
      backgroundColor: 'white',
      padding: 10,
    }}>
    <Pill
      isSelected={category === 'all'}
      onClick={() => setCategory('all')}>
      All
    </Pill>
    <Pill
      isSelected={category === 'favorites'}
      onClick={() => setCategory('favorites')}
      vPad={3}>
      <img
        style={{
          width: 24,
          height: 24,
        }}
        src="./assets/images/star_on.png"
      />
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
    <Pill
      isSelected={category === 'drg'}
      onClick={() => setCategory('drg')}>
      DRG
    </Pill>
  </Container>
);

export default SoundboardCategorySelect;
