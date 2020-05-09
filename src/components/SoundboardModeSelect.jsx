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

const SoundboardModeSelect = ({ soundboardMode, setSoundboardMode }) => (
  <Container
    style={{
      flexDirection: 'row',
      backgroundColor: 'black',
      padding: 10,
    }}>
    <Pill
      isSelected={soundboardMode === 'all'}
      onClick={() => setSoundboardMode('all')}>
      All
    </Pill>
    <Pill
      isSelected={soundboardMode === 'none'}
      onClick={() => setSoundboardMode('none')}>
      None
    </Pill>
  </Container>
);

export default SoundboardModeSelect;
