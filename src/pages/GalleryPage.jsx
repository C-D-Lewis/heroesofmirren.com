import React from 'react';
import { Images } from '../assets';
import Container from '../components/Container.jsx';
import LargeImage from '../components/LargeImage.jsx';

/**
 * AtributionLinkIcon component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const AttributionLinkIcon = ({ img, url }) =>
  <a href={url}
    target="_blank"
    style={{}}>
    <img
      src={`./assets/images/${img}`}
      style={{
        width: 32,
        height: 32,
        margin: 5,
      }} />
  </a>;

/**
 * Atribution component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const Attribution = () =>
  <Container
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      maxWidth: 300,
      margin: '15px auto',
      padding: 12,
    }}>
    <span
      style={{
        color: '#333',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        marginRight: 5,
      }}>
      Art by Steph Bond
    </span>
    <AttributionLinkIcon img="twitter.png" url="https://twitter.com/anamorte_art" />
    <AttributionLinkIcon img="instagram.png" url="https://instagram.com/anamorte_art" />
  </Container>;

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
    <Attribution />
  </Container>;

export default GalleryPage;
