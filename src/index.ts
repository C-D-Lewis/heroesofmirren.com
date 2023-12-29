import { Fabricate, FabricateOptions } from 'fabricate.js';
import { AppState } from './types';
import { Tab, TabBar } from './components/TabBar';
import Header from './components/Header';
import GalleryPage from './pages/GalleryPage';
import SoundboardPage from './pages/SoundboardPage';
import StoryPage from './pages/StoryPage';
import Footer from './components/Footer';
import Theme from './theme';

declare const fabricate: Fabricate<AppState>;

/**
 * AppTabBar component.
 *
 * @returns {HTMLElement} The component.
 */
const AppTabBar = () => TabBar()
  .setChildren([
    Tab({ tab: 'gallery' })
      .onClick(() => fabricate.update({ tab: 'gallery' }))
      .setText('Gallery'),
    Tab({ tab: 'soundboard' })
      .onClick(() => fabricate.update({ tab: 'soundboard' }))
      .setText('Soundboard'),
    Tab({ tab: 'story' })
      .onClick(() => fabricate.update({ tab: 'story' }))
      .setText('Story'),
  ]);

/**
 * App component.
 *
 * @returns {HTMLElement} The component.
 */
const App = () => fabricate('Column')
  .setStyles({
    textAlign: 'center',
    width: '100%',
    height: '100%',
    maxWidth: '625px',
    margin: 'auto',
  })
  .setChildren([
    Header(),
    AppTabBar(),
    fabricate('Column')
      .setStyles({ flex: '1' })
      .setChildren([
        fabricate.conditional(({ tab }) => tab === 'gallery', GalleryPage),
        fabricate.conditional(({ tab }) => tab === 'soundboard', SoundboardPage),
        fabricate.conditional(({ tab }) => tab === 'story', StoryPage),
      ]),
    Footer(),
  ]);

const initialState: AppState = {
  tab: 'gallery',
  category: 'all',
  storyIndex: 0,
  favorites: [],
};

const options: FabricateOptions = {
  persistState: ['favorites'],
  theme: Theme,
};

fabricate.app(App, initialState, options);
