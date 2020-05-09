import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Colors } from './theme';
import Container from './components/Container.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import Image from './components/Image.jsx';
import SoundBoard from './components/SoundBoard.jsx';
import { TabBar, Tab } from './components/TabBar.jsx';

const Application = () => {
  const [tab, setTab] = useState('gallery');

  // Load the service worker
  useEffect(() => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register('/dist/worker.js')
        .then(() => console.log('serviceWorker installed'))
        .catch(err => console.log(`Error installing serviceWorker: ${e.stack}`));
    }
  }, []);

  return (
    <Container style={{
      textAlign: 'center',
      width: '100%',
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
      <Container>
        {tab === 'gallery' && <Gallery />}
        {tab === 'soundboard' && <SoundBoard />}
      </Container>
    </Container>
  );
};

ReactDOM.render(<Application/>, document.getElementById('app'));
