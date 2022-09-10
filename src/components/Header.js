/** Header height */
const HEADER_SIZE = 200;

/**
 * Header component.
 *
 * @returns {HTMLElement}
 */
fabricate.declare('Header', () => fabricate.Row()
  .withStyles({
    height: `${HEADER_SIZE}px`,
    justifyContent: 'center',
    backgroundColor: 'white',
  })
  .withChildren([
    fabricate('img')
      .withAttributes({ src: './assets/images/logo-new.png' })
      .withStyles({
        maxWidth: `${HEADER_SIZE}px`,
        margin: '5px',
        height: 'auto',
        objectFit: 'contain',
      }),
  ]));
