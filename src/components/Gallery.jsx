import React from 'react';
import { Images } from '../assets';
import Container from './Container.jsx';
import Image from './Image.jsx';

const Gallery = () =>
  <Container style={{ marginTop: 50 }}>
    {Images.map(({ name, maxWidth = 500 }) => (
      <Image
        key={name}
        src={`./assets/images/${name}`}
        style={{
          maxWidth,
          margin: 'auto',
          marginBottom: 50,
        }} />
    ))}
  </Container>;

export default Gallery;
