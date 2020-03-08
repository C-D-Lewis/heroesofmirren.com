import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import Image from './components/Image.jsx';

const IMAGES = [
  { name: 'logo-new.png', maxWidth: 300 },
  { name: 'minecart.png' },
  { name: 'bartop.jpg' },
  { name: 'clyde-steph.jpg' },
  { name: 'clyde-cat.jpg', maxWidth: 300 },
  { name: 'tackle.jpeg', maxWidth: 410 },
  { name: 'paper-plane.jpg', maxWidth: 200 },
  { name: 'harpie.jpg' },
  { name: 'reykjavik.jpg', maxWidth: 300 },
  { name: 'special.jpeg', maxWidth: 300 },
  { name: 'butt-hammer.jpg', maxWidth: 200 },
];

const Application = () => {
  return (
    <Container style={{
      textAlign: 'center',
      width: '100%',
    }}>
      {IMAGES.map(({ name, maxWidth = 500 }) => (
        <Image key={name} src={`./assets/${name}`} style={{ maxWidth, margin: 'auto' }} />
      ))}
    </Container>
  );
};

ReactDOM.render(<Application/>, document.getElementById('app'));
