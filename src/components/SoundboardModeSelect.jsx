import React from 'react';
import Container from './Container.jsx';
import { Colors } from '../theme';

const Pill = ({ children, onClick, isSelected }) => (
  <div
    style={{
      borderRadius: 50,
      backgroundColor: Colors.primary,
      padding: '5px 10px',
      color: isSelected ? 'white': '#555',
      margin: 5,
    }}
    onClick={onClick}>
    {children}
  </div>
);

const SoundboardModeSelect = ({ category, setCategory }) => (
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
      isSelected={category === 'ia'}
      onClick={() => setCategory('ia')}>
      IA
    </Pill>
    <Pill
      isSelected={category === 'dnd'}
      onClick={() => setCategory('dnd')}>
      D&D
    </Pill>
  </Container>
);

export default SoundboardModeSelect;
