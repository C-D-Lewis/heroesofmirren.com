import React, { useState } from 'react';
import { Sounds } from '../assets';
import Container from './Container.jsx';
import SoundByte from './SoundByte.jsx';
import RandomSoundByte from './RandomSoundByte.jsx';
import SoundboardCategorySelect from './SoundboardCategorySelect.jsx';

/**
 * Show just the sounds for the chosen category.
 *
 * @param {string} category - Chosen category.
 * @param {string} query - Query for this filter.
 * @returns {Array<HTMLElement>} List of SoundByte or RandomSoundByte elements.
 */
const soundsForCategory = (category, query) => {
  if (!(category === query || category === 'all')) return null;

  return Sounds
    .filter(p => p.categories.includes(query))
    .map(item => item.sound
      ? <SoundByte key={item.label} data={item} />
      : <RandomSoundByte key={item.label} data={item} />)
};

/**
 * Soundboard component.
 *
 * @returns {HTMLElement}
 */
const Soundboard = () => {
  const [category, setCategory] = useState('all');

  return (
    <div style={{ height: '100%' }}>
      <SoundboardCategorySelect
        setCategory={setCategory}
        category={category} />
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
    </div>
  );
};

export default Soundboard;
