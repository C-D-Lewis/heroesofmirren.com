import React from 'react';
import { Images } from '../assets';
import Container from '../components/Container.jsx';
import LargeImage from '../components/LargeImage.jsx';

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
      <LargeImage
        key={name}
        src={`./assets/images/${name}`}
        style={{
          maxWidth,
          margin: 'auto',
          marginBottom: 50,
        }} />
    ))}
    <span>Art by Steph Bond</span>
  </Container>;

export default GalleryPage;
