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
    fabricate('Header'),
    fabricate('TabBar')
      .withChildren([
        fabricate('Tab', { tab: 'gallery' })
          .onClick(() => fabricate.updateState('tab', () => 'gallery'))
          .setText('Gallery'),
        fabricate('Tab', { tab: 'soundboard' })
          .onClick(() => fabricate.updateState('tab', () => 'soundboard'))
          .setText('Soundboard'),
        fabricate('Tab', { tab: 'story' })
          .onClick(() => fabricate.updateState('tab', () => 'story'))
          .setText('Story'),
      ]),
    fabricate.Column()
      .withChildren([
        fabricate.when((state) => state.tab === 'gallery', () => fabricate('GalleryPage')),
        fabricate.when((state) => state.tab === 'soundboard', () => fabricate('SoundboardPage')),
        fabricate.when((state) => state.tab === 'story', () => fabricate('StoryPage')),
      ]),
    fabricate('Footer'),
  ]);

const initialState = {
  tab: 'gallery',
  category: 'all',
};
fabricate.app(Application(), initialState);

fabricate.updateState('tab', () => 'gallery');
