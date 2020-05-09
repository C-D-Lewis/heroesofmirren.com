import React, { useState, useEffect } from 'react';
import { Sounds } from '../assets';
import Container from './Container.jsx';
import SoundByte from './SoundByte.jsx';
import RandomSoundByte from './RandomSoundByte.jsx';

const soundsForCategory = (category, query) => {
  if (category === query || category === 'all') {
    return Sounds
      .filter(p => p.categories.includes(query))
      .map(item => item.sound
        ? <SoundByte key={item.label} data={item} />
        : <RandomSoundByte key={item.label} data={item} />)
  }

  return null;
};

const SoundBoard = ({ category = 'all' }) =>
  <Container
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'black',
      padding: 10,
    }}>
    {soundsForCategory(category, 'all')}
    {soundsForCategory(category, 'ia')}
    {soundsForCategory(category, 'dnd')}
    {soundsForCategory(category, 'songs')}
  </Container>

export default SoundBoard;
