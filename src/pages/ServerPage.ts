import { Fabricate } from 'fabricate.js';
import { AppState, LocationItem } from '../types';
import { SERVER_LOCATIONS } from '../assets';
import Theme from '../theme';

/** URL to the map image */
const MAP_URL = 'https://s3.us-east-1.amazonaws.com/public-files.chrislewis.me.uk/shared/minecraft/map.png';

declare const fabricate: Fabricate<AppState>;

/**
 * Header component.
 *
 * @returns {HTMLElement} Header component.
 */
const Header = () => fabricate('Text')
  .setStyles({ fontSize: '1.3rem', fontWeight: 'bold' })
  .setNarrowStyles({ fontSize: '1.1rem' });

/**
 * ServerInfo component.
 *
 * @returns {HTMLElement} ServerInfo component.
 */
const ServerInfo = () => fabricate('Row')
  .setStyles(({ styles }) => ({
    margin: '10px auto',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: styles.boxShadow,
  }))
  .setChildren([
    fabricate('Image', { src: 'assets/images/mc-logo.png' })
      .setStyles({
        width: '60px',
        height: '60px',
        marginRight: '5px',
        filter: 'brightness(1.3)',
      })
      .setNarrowStyles({
        width: '32px',
        height: '32px',
      }),
    fabricate('Column')
      .setStyles({ })
      .setChildren([
        fabricate('Text')
          .setStyles({
            fontSize: '1.3rem',
            fontFamily: 'monospace',
            fontWeight: 'bold',
          })
          .setNarrowStyles({ fontSize: '1rem' })
          .setText('minecraft.heroesofmirren.com:25501'),
        fabricate('Text')
          .setStyles({
            fontStyle: 'italic',
            color: '#999',
            fontSize: '0.9rem',
          })
          .setText('(whitelist only)'),
      ]),
  ]);

/**
 * LocationListItem component.
 *
 * @param {object} props - Component props.
 * @param {LocationItem} props.location - Location data.
 * @returns {HTMLElement} LocationListItem component.
 */
const LocationListItem = ({ location }: { location: LocationItem }) => fabricate('Column')
  .setStyles(({ styles }) => ({
    margin: '10px auto',
    padding: '0px',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: styles.boxShadow,
    overflow: 'hidden',
  }))
  .setChildren([
    fabricate('Image', { src: location.img })
      .setStyles({ width: '100%', height: 'auto' }),
    fabricate('Column')
      .setStyles({ padding: '8px' })
      .setChildren([
        Header().setText(location.name),
        fabricate('Text')
          .setStyles({ fontStyle: 'italic', color: '#777' })
          .setText(`From ${location.date} @ ${location.coordinates}`),
        fabricate('Text')
          .setStyles({ textAlign: 'initial' })
          .setText(location.description),
      ]),
  ]);

/**
 * LocationList component.
 *
 * @returns {HTMLElement} LocationList component.
 */
const LocationList = () => fabricate('Column')
  .setStyles({ padding: '10px 20px' })
  .setChildren(SERVER_LOCATIONS.map((location) => LocationListItem({ location })));

/**
 * NetherMap component.
 *
 * @returns {HTMLElement} NetherMap component.
 */
const NetherMap = () => fabricate('div')
  .setStyles(({ styles }) => ({
    margin: '20px',
    marginTop: '0px',
    padding: '0px',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: styles.boxShadow,
    overflow: 'hidden',
  }))
  .setChildren([
    Header()
      .setStyles({ margin: '10px 0px' })
      .setText('Nether Road Map'),
    fabricate('Image', { src: 'assets/images/nether-map.png' })
      .setStyles({ width: '100%', height: 'auto' }),
  ]);

/**
 * Footer component.
 *
 * @returns {HTMLElement} Footer component.
 */
const Footer = () => fabricate('Image', { src: 'assets/images/mc-footer.jpg' })
  .setStyles({ width: '100%', height: 'auto' });

/**
 * Button to open the map.
 *
 * @returns {HTMLElement} MapButton component.
 */
const MapButton = () => fabricate('Button', {
  text: 'View Server Map',
  color: 'white',
  backgroundColor: Theme.palette.primary,
})
  .setStyles({
    margin: '16px auto 0px auto',
    padding: '12px',
    fontSize: '1.2rem',
  })
  .onClick(() => window.open(MAP_URL, '_blank'));

/**
 * ServerPage component.
 *
 * @returns {HTMLElement} ServerPage component.
 */
const ServerPage = () => fabricate('Column')
  .setStyles({
    backgroundColor: '#ddd',
    paddingTop: '10px',
    boxShadow: 'black 1px 4px 6px -4px inset',
  })
  .setChildren([
    ServerInfo(),
    MapButton(),
    LocationList(),
    NetherMap(),
    Footer(),
  ]);

export default ServerPage;
