import React from 'react';
import { Images } from '../assets';
import Container from '../components/Container.jsx';
import Image from '../components/Image.jsx';

/**
 * GalleryPage component.
 *
 * @returns {HTMLElement}
 */
const GalleryPage = () =>
  <Container
    style={{
      backgroundColor: 'white',
      paddingTop: 50,
    }}>
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

export default GalleryPage;
