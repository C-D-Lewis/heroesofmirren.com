import React, { useState, useEffect } from 'react';
import { Sounds } from '../assets';
import Container from './Container.jsx';
import SoundByte from './SoundByte.jsx';
import RandomSoundByte from './RandomSoundByte.jsx';

const SoundBoard = ({ soundboardMode = 'all' }) =>
  <Container
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'black',
      padding: 10,
      height: soundboardMode === 'all' ? 'initial' : '100%',
    }}>
    { soundboardMode == 'all' && (
      Sounds.map(item => item.sound
        ? <SoundByte key={item.label} data={item} />
        : <RandomSoundByte key={item.label} data={item} />)
    )}
  </Container>

export default SoundBoard;
