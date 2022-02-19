/**
 * Image component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const LargeImage = ({ src }) => fabricate('img')
  .withStyles({
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
  })
  .withAttributes({ src });
