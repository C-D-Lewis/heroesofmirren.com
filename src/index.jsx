import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import Image from './components/Image.jsx';
import SoundBoard from './components/SoundBoard.jsx';
import SoundboardModeSelect from './components/SoundboardModeSelect.jsx';
import { TabBar, Tab } from './components/TabBar.jsx';

const Application = () => {
  const [tab, setTab] = useState('gallery');
  const [category, setCategory] = useState('all');

  return (
    <Container style={{
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
        {tab === 'gallery' && <Gallery />}
        {tab === 'soundboard' && (
          <div style={{ height: '100%' }}>
            <SoundboardModeSelect
              setCategory={setCategory}
              category={category} />
            <SoundBoard category={category} />
          </div>
        )}
      </Container>
    </Container>
  );
};

ReactDOM.render(<Application/>, document.getElementById('app'));
