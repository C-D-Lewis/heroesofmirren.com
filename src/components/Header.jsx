import React from 'react'
import Container from './Container.jsx';
import Image from './Image.jsx';

const Header = () =>
  <Container style={{
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
  }}>
    <Image src="./assets/logo-new.png" style={{ width: 200 }} />
  </Container>;

export default Header;
