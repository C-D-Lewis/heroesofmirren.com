/* global Assets */

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
  marginTop: '75px',
  maxWidth: '300px',
  maxHeight: '380px',
};

/**
* StoryPage component.
*
* @param {object} props - Component props.
* @param {string} props.text - Page data.
* @returns {HTMLElement}
*/
const StoryPage = ({ text }) => fabricate.Column()
  .withChildren([
    fabricate.Image({
      src: 'assets/images/paper.png',
      width: '90%',
      height: 'auto',
    })
      .withStyles({ margin: 'auto' }),
    fabricate.Text({ text })
      .withStyles({
        padding: '10px 0px',
        margin: '5px 10px',
        fontFamily: 'Vujahday Script, cursive',
        overflowY: 'scroll',
        position: 'absolute',
        textAlign: 'left',

        ...(fabricate.isMobile() ? mobileStyles : desktopStyles),
      }),
  ]);

/**
* StoryPage component.
*
* @returns {HTMLElement}
*/
fabricate.declare('StoryPage', () => fabricate.Column()
  .withStyles({
    backgroundImage: 'url("assets/images/desk-bg.jpg")',
    backgroundSize: 'cover',
  })
  .withChildren([
    ...Assets.storyPages.map(StoryPage),
  ]));
