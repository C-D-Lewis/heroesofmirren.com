/** Header height */
const HEADER_SIZE = 200;

/**
 * Header component.
 *
 * @returns {HTMLElement}
 */
// eslint-disable-next-line no-unused-vars
const Header = () => fabricate.Row()
  .withStyles({
    height: `${HEADER_SIZE}px`,
    justifyContent: 'center',
    paddingBottom: '10px',
    backgroundColor: 'white',
  })
  .withChildren([
    fabricate('img')
      .withAttributes({ src: './assets/images/logo-new.png' })
      .withStyles({
        width: `${HEADER_SIZE}px`,
        margin: '10px',
      }),
  ]);
