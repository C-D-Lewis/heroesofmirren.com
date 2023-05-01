/**
 * AppTabBar component.
 *
 * @returns {HTMLElement} The component.
 */
const AppTabBar = () => fabricate('TabBar')
  .setChildren([
    fabricate('Tab', { tab: 'gallery' })
      .onClick(() => fabricate.update({ tab: 'gallery' }))
      .setText('Gallery'),
    fabricate('Tab', { tab: 'soundboard' })
      .onClick(() => fabricate.update({ tab: 'soundboard' }))
      .setText('Soundboard'),
    fabricate('Tab', { tab: 'story' })
      .onClick(() => fabricate.update({ tab: 'story' }))
      .setText('Story'),
  ]);

/**
 * Application component.
 *
 * @returns {HTMLElement} The component.
 */
const Application = () => fabricate('Column')
  .setStyles({
    textAlign: 'center',
    width: '100%',
    height: '100%',
    maxWidth: '625px',
    margin: 'auto',
  })
  .setChildren([
    fabricate('Header'),
    AppTabBar(),
    fabricate('Column')
      .setStyles({ flex: 1 })
      .setChildren([
        fabricate('GalleryPage').when(({ tab }) => tab === 'gallery'),
        fabricate('SoundboardPage').when(({ tab }) => tab === 'soundboard'),
        fabricate('StoryPage').when(({ tab }) => tab === 'story'),
      ]),
    fabricate('Footer'),
  ]);

const initialState = {
  tab: 'gallery',
  category: 'all',
  storyIndex: 0,
};
fabricate.app(Application(), initialState);
