import { Fabricate, FabricateOptions } from 'fabricate.js';
import { AppState } from './types';
import Header from './components/Header';
import GalleryPage from './pages/GalleryPage';
import SoundboardPage from './pages/SoundboardPage';
import StoryPage from './pages/StoryPage';
import Footer from './components/Footer';
import Theme from './theme';

declare const fabricate: Fabricate<AppState>;

/**
 * Register cache service worker.
 */
const registerServiceWorker = async () => {
  if (!navigator.serviceWorker) {
    console.log('Service worker not supported');
    return;
  }

  try {
    const res = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
    if (res.installing) {
      console.log('Service worker installing');
    } else if (res.waiting) {
      console.log('Service worker installed');
    } else if (res.active) {
      console.log('Service worker active');
    }
  } catch (e) {
    console.log(e);
    alert(`Service worker registration failed ${e}`);
  }
};

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
    fabricate('Tabs', {
      tabs: {
        Gallery: GalleryPage,
        Soundboard: SoundboardPage,
        Story: StoryPage,
      },
      tabStyles: {
        height: '28px',
        backgroundColor: Theme.palette.primary,
        fontSize: '1.2rem',
        display: 'flex',  // Library
        justifyContent: 'center',  // Library
      },
    }),
    Footer(),
  ]);

const initialState: AppState = {
  category: 'all',
  storyIndex: 0,
  favorites: [],
};

const options: FabricateOptions = {
  persistState: ['favorites'],
  theme: Theme,
};

fabricate.app(App, initialState, options);
registerServiceWorker();
