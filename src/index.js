/**
 * Application component.
 *
 * @returns {HTMLElement}
 */
const Application = () => fabricate.Column()
  .withStyles({
    textAlign: 'center',
    width: '100%',
    height: '100%',
    maxWidth: '625px',
    margin: 'auto',
  })
  .withChildren([
    Header(),
    TabBar()
      .withChildren([
        Tab({ tab: 'gallery' })
          .onClick(() => fabricate.updateState('tab', () => 'gallery'))
          .setText('Gallery'),
        Tab({ tab: 'soundboard' })
          .onClick(() => fabricate.updateState('tab', () => 'soundboard'))
          .setText('Soundboard'),
      ]),
    fabricate.Column()
      .withChildren([
        fabricate.when(state => state.tab === 'gallery', () => GalleryPage()),
        fabricate.when(state => state.tab === 'soundboard', () => SoundboardPage()),
      ]),
    Footer(),
  ]);

const initialState = {
  tab: 'gallery',
  category: 'all',
};
fabricate.app(Application(), initialState);

fabricate.updateState('tab', () => 'gallery');
