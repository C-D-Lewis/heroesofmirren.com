const desktopStyles = {
  fontSize: '20px',
  rotate: '-4.5deg',
  marginLeft: '90px',
  marginTop: '130px',
  maxWidth: '480px',
  maxHeight: '560px',
};

const mobileStyles = {
  fontSize: '18px',
  rotate: '-4.5deg',
  marginLeft: '61px',
  marginTop: '80px',
  maxWidth: '290px',
  maxHeight: '370px',
};

/**
 * StoryPage component.
 *
 * @param {object} props - Component props.
 * @param {string} props.text - Page data.
 * @returns {HTMLElement}
 */
const StoryPage = ({ text }) => fabricate('Column')
  .setChildren([
    fabricate('Image', { src: 'assets/images/paper.png' })
      .setStyles({
        width: '90%',
        height: 'auto',
        margin: 'auto',
      }),
    fabricate('Text')
      .setStyles({
        padding: '10px 0px',
        margin: '5px 10px',
        fontFamily: 'Vujahday Script, cursive',
        overflowY: 'scroll',
        position: 'absolute',
        textAlign: 'left',

        ...(fabricate.isNarrow() ? mobileStyles : desktopStyles),
      })
      .setText(text),
  ]);

/**
 * StoryPage component.
 *
 * @returns {HTMLElement}
 */
fabricate.declare('StoryPage', () => fabricate('Column')
  .setStyles({
    backgroundImage: 'url("assets/images/desk-bg.jpg")',
    backgroundSize: 'cover',
  })
  .setChildren([...Assets.storyPages.map(StoryPage)]));
