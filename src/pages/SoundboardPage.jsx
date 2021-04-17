import React, { useState, useEffect } from 'react';
import { Sounds } from '../assets';
import { getFavorites } from '../services/favorites';
import Container from '../components/Container.jsx';
import SoundByte from '../components/SoundByte.jsx';
import RandomSoundByte from '../components/RandomSoundByte.jsx';
import SoundboardCategorySelect from '../components/SoundboardCategorySelect.jsx';

/**
 * SoundboardPage component.
 *
 * @returns {HTMLElement}
 */
const SoundboardPage = () => {
  const [category, setCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);

  /**
   * Show just the sounds for the chosen category.
   *
   * @param {string} category - Chosen category.
   * @param {string} query - Query for this filter.
   * @returns {Array<HTMLElement>} List of SoundByte or RandomSoundByte elements.
   */
  const soundsForCategory = (category, query) => {
    if (category !== query) return null;

    if (category === 'favorites') {
      return Sounds
        .filter(p => favorites.includes(p.id))
        .map(item => item.sound
          ? <SoundByte key={item.label} data={item} />
          : <RandomSoundByte key={item.label} data={item} />);
    }

    return Sounds
      .filter(p => p.categories.includes(query) || query === 'all')
      .map(item => item.sound
        ? <SoundByte key={item.label} data={item} />
        : <RandomSoundByte key={item.label} data={item} />);
  };

  // Regularly check the list of favorites
  useEffect(() => {
    setFavorites(getFavorites());

    const handle = setInterval(() => setFavorites(getFavorites()), 500);
    return () => clearInterval(handle);
  }, []);

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
        {soundsForCategory(category, 'favorites')}
        {soundsForCategory(category, 'ia')}
        {soundsForCategory(category, 'dnd')}
        {soundsForCategory(category, 'songs')}
      </Container>
    </div>
  );
};

export default SoundboardPage;
