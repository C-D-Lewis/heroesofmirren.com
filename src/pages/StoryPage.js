const desktopStyles = {
  fontSize: '22px',
  marginLeft: '65px',
  marginTop: '85px',
  maxWidth: '515px',
  maxHeight: '660px',
};

const mobileStyles = {
  fontSize: '18px',
  marginLeft: '45px',
  marginTop: '50px',
  maxWidth: '325px',
  maxHeight: '440px',
};

/**
 * StoryPage component.
 *
 * @returns {HTMLElement} The fabricate component.
 */
const StoryPage = () => fabricate('Column')
  .setChildren([
    fabricate('Image', { src: 'assets/images/paper.png' })
      .setStyles({
        margin: 'auto',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
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
      .onUpdate(async (el, { selectedStory }) => {
        const content = await fetch(`assets/story/${selectedStory}`).then((r) => r.text());
        el.setText(content);
      }, ['fabricate:init', 'selectedStory']),
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
  .setChildren([
    StoryPage(),
  ]));
