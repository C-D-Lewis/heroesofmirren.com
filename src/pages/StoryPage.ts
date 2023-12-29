import { Fabricate, FabricateComponent } from 'fabricate.js';
import { AppState } from '../types';

declare const fabricate: Fabricate<AppState>;
declare const StoryPages: string[];

const desktopStyles = {
  fontSize: '22px',
  maxWidth: '540px',
  maxHeight: '600px',
  padding: '0px 40px 40px 40px',
};

const mobileStyles = {
  fontSize: '18px',
  maxWidth: '360px',
  padding: '20px',
};

/**
 * ControlRow component.
 *
 * @returns {HTMLElement} fabricate component.
 */
const ControlRow = () => fabricate('Row')
  .setStyles({
    padding: '10px',
    justifyContent: 'center',
  })
  .setChildren([
    fabricate('Button')
      .onClick((el, { storyIndex }) => {
        fabricate.update({ storyIndex: Math.max(0, storyIndex - 1) });
      })
      .setText('Previous'),
    fabricate('Button')
      .onClick((el, { storyIndex }) => {
        fabricate.update({ storyIndex: Math.min(storyIndex + 1, StoryPages.length - 1) });
      })
      .setText('Next'),
  ]);

/**
 * StoryPage component.
 *
 * @returns {FabricateComponent} StoryPage component.
 */
const StoryPage = () => {
  /**
   * Update content.
   *
   * @param {FabricateComponent} el - Element.
   * @param {AppState} state - App state.
   */
  const updateStoryPage = async (el: FabricateComponent<AppState>, { storyIndex }: AppState) => {
    const fileName = StoryPages[storyIndex];
    const content = await fetch(`assets/story/${fileName}`).then((r) => r.text());
    el.setText(content);
  };

  return fabricate('Column')
    .setStyles({
      background: 'url(assets/images/parchment.jpg)',
      backgroundPositionX: '-50px',
      backgroundPositionY: '-50px',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
    })
    .setChildren([
      ControlRow(),
      fabricate('Text')
        .setStyles({
          fontFamily: 'Vujahday Script, cursive',
          fontWeight: 'bold',
          overflowY: 'scroll',
          textAlign: 'left',
          margin: '0px auto',
          width: '100%',
          ...(fabricate.isNarrow() ? mobileStyles : desktopStyles),
        })
        .onUpdate(updateStoryPage, ['fabricate:init', 'fabricate:created', 'storyIndex']),
    ]);
};

export default StoryPage;
