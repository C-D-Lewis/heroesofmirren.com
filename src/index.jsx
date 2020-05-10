import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TabBar, Tab } from './components/TabBar.jsx';
import Container from './components/Container.jsx';
import Header from './components/Header.jsx';
import Image from './components/Image.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import SoundboardPage from './pages/SoundboardPage.jsx';

/**
 * Application component.
 *
 * @returns {HTMLElement}
 */
const Application = () => {
  const [tab, setTab] = useState('gallery');

  return (
    <Container
      style={{
        textAlign: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      }}>
      <Header />
      <TabBar>
        <Tab
          isSelected={tab === 'gallery'}
          onClick={() => setTab('gallery')}>
          Gallery
        </Tab>
        <Tab
          isSelected={tab === 'soundboard'}
          onClick={() => setTab('soundboard')}>
          Soundboard
        </Tab>
      </TabBar>
      <Container style={{ height: '100%' }}>
        {tab === 'gallery' && <GalleryPage />}
        {tab === 'soundboard' && <SoundboardPage />}
      </Container>
    </Container>
  );
};

ReactDOM.render(<Application/>, document.getElementById('app'));
