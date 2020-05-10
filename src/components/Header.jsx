import React from 'react'
import Container from './Container.jsx';
import Image from './Image.jsx';

/** Header height */
const HEADER_HEIGHT = 200;

/**
 * Header component.
 *
 * @returns {HTMLElement}
 */
const Header = () =>
  <Container
    style={{
      height: HEADER_HEIGHT,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 10,
      backgroundColor: 'white',
    }}>
    <Image
      src="./assets/images/logo-new.png"
      style={{ width: HEADER_HEIGHT }}/>
  </Container>;

export default Header;
