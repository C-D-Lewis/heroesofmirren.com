import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page.jsx';
import Image from './components/Image.jsx';

const IMAGES = [
  { name: 'logo-new.png', width: 300 },
  { name: 'minecart.png', width: 'initial' },
  { name: 'bartop.jpg', width: 'initial' },
  { name: 'clyde-steph.jpg', width: 'initial' },
  { name: 'clyde-cat.jpg', width: 300 },
  { name: 'tackle.jpeg', width: 410 },
  { name: 'paper-plane.jpg', width: 200 },
  { name: 'harpie.jpg', width: 'initial' },
  { name: 'reykjavik.jpg', width: 300 },
  { name: 'special.jpeg', width: 300 },
  { name: 'butt-hammer.jpg', width: 200 },
];

const Application = () => {
  return (
    <Page>
      {IMAGES.map(({ name, width = 'initial' }) => (
        <Image src={`./assets/${name}`} restyle={{ width }} />
      ))}
    </Page>
  );
};

ReactDOM.render(<Application/>, document.getElementById('app'));
