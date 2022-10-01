/**
 * AppTabBar component.
 */
const AppTabBar = () => {
  // TODO: Remove once story tab is complete
  const showStoryTab = Utils.getQueryParam('story');

  return fabricate('TabBar')
    .setChildren([
      fabricate('Tab', { tab: 'gallery' })
        .onClick(() => fabricate.update({ tab: 'gallery' }))
        .setText('Gallery'),
      fabricate('Tab', { tab: 'soundboard' })
        .onClick(() => fabricate.update({ tab: 'soundboard' }))
        .setText('Soundboard'),
      showStoryTab
        ? fabricate('Tab', { tab: 'story' })
          .onClick(() => fabricate.update({ tab: 'story' }))
          .setText('Story')
        : fabricate('div'),
    ]);
};

/**
 * Application component.
 *
 * @returns {HTMLElement}
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
};
fabricate.app(Application(), initialState);
