/** Header height */
const HEADER_SIZE = 200;

/**
 * Header component.
 *
 * @returns {HTMLElement}
 */
const Header = () => fabricate.Row()
  .withStyles({
    height: HEADER_SIZE,
    justifyContent: 'center',
    paddingBottom: 10,
    backgroundColor: 'white',
  })
  .withChildren([
    LargeImage({ src: './assets/images/logo-new.png' })
      .withStyles({ width: HEADER_SIZE }),
  ]);
