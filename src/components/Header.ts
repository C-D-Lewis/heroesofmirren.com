import { Fabricate } from 'fabricate.js';
import { AppState } from '../types';

declare const fabricate: Fabricate<AppState>;

/** Header height */
const HEADER_SIZE = 200;

/**
 * Header component.
 *
 * @returns {HTMLElement} Header component.
 */
const Header = () => fabricate('Row')
  .setStyles({
    height: `${HEADER_SIZE}px`,
    justifyContent: 'center',
    backgroundColor: 'white',
  })
  .setChildren([
    fabricate('Image', { src: './assets/images/logo-new.png' })
      .setStyles({
        width: `${HEADER_SIZE}px`,
        margin: '5px',
        height: 'auto',
        objectFit: 'contain',
      }),
  ]);

export default Header;
