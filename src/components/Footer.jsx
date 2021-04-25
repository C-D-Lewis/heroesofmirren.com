import React from 'react'
import Container from './Container.jsx';

/**
 * Footer component.
 *
 * @returns {HTMLElement}
 */
const Footer = () =>
  <Container
    style={{
      justifyContent: 'center',
      backgroundColor: '#444',
      boxShadow: 'inset 1px 4px 11px -6px black',
    }}>
    <Container
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '20px 0px',
        alignItems: 'center',
      }}>
      <img
        src="./assets/images/github.png"
        style={{ width: 32, height: 32 }}/>
      <span
        style={{
          color: 'white',
          marginLeft: 10,
          marginRight: 5,
        }}>
        Source available
      </span>
      <a href="https://github.com/C-D-Lewis/heroesofmirren.com" target="_blank">
        on GitHub
      </a>
    </Container>
  </Container>;

export default Footer;
