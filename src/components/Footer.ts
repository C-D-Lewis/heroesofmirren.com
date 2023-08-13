import { Fabricate } from 'fabricate.js';
import { AppState } from '../types';

declare const fabricate: Fabricate<AppState>;

/**
 * Footer component.
 *
 * @returns {HTMLElement} Footer component.
 */
const Footer = () => fabricate('Column')
  .setStyles({
    justifyContent: 'center',
    backgroundColor: '#444',
    boxShadow: 'inset 1px 4px 11px -6px black',
  })
  .setChildren([
    fabricate('Row')
      .setStyles({
        justifyContent: 'center',
        padding: '10px 0px',
        alignItems: 'center',
      })
      .setChildren([
        fabricate('img')
          .setAttributes({ src: './assets/images/github.png' })
          .setStyles({
            width: '32px',
            height: '32px',
            cursor: 'pointer',
          })
          .onClick(() => window.open('https://github.com/C-D-Lewis/heroesofmirren.com', '_blank')),
        fabricate('FabricateAttribution')
          .setStyles({
            marginLeft: '15px',
            width: '50px',
          }),
      ]),
  ]);

export default Footer;
