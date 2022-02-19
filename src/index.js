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
    maxWidth: 625,
    margin: 'auto',
  })
  .withChildren([
    Header(),
    TabBar()
      .withChildren([
        Tab({ tab: 'gallery' })
          .setText('Gallery'),
        Tab({ tab: 'soundboard' })
          .setText('Soundboard'),
      ]),
    fabricate.Column()
      .withChildren([
        when(state => state.tab === 'gallery', () => GalleryPage()),
        when(state => state.tab === 'soundboard', () => SoundboardPage()),
      ]),
    Footer(),
  ]);

const initialState = {
  tab: 'gallery',
  category: 'all',
};
fabricate.app(document.getElementById('app'), initialState);
