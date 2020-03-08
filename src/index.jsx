import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.jsx';
import Image from './components/Image.jsx';

const IMAGES = [
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

const Header = () =>
  <Container style={{
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  }}>
    <Image src="./assets/logo-new.png" style={{ width: 200 }} />
  </Container>;

const Application = () => {
  return (
    <Container style={{
      textAlign: 'center',
      width: '100%',
    }}>
      <Header />
      <Container style={{

      }} >
        {IMAGES.map(({ name, maxWidth = 500 }) => (
          <Image
            key={name}
            src={`./assets/${name}`}
            style={{
              maxWidth,
              margin: 'auto',
              marginBottom: 50,
            }} />
        ))}
      </Container>
    </Container>
  );
};

ReactDOM.render(<Application/>, document.getElementById('app'));
