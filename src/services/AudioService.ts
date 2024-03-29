import { Fabricate } from 'fabricate.js';
import { AppState } from '../types';

declare const fabricate: Fabricate<AppState>;

const localCache: Record<string, HTMLAudioElement> = {};

/**
 * Load an audio file if not cached already.
 *
 * @param {string} id - Sound ID.
 * @param {string} name - File name.
 * @returns {Audio} Loaded Audio.
 */
// eslint-disable-next-line import/prefer-default-export
export const loadAudio = (id: string, name: string): Promise<HTMLAudioElement> => new Promise(
  (resolve) => {
    const audioLoadedKey = fabricate.buildKey('audioLoaded', id);

    const fullPath = `./assets/sounds/${name}.mp3`;

    // Try to use Web Cache API
    // caches.open('sounds').then((cache) => {
    //   cache.addAll([fullPath])
    //     .then(() => {
    //       console.log('Cached!');
    //     });
    // });

    if (localCache[name]) {
      resolve(localCache[name]);
      return;
    }

    const audio = new Audio(fullPath);
    audio.addEventListener('canplaythrough', () => {
      // Only notify once
      if (localCache[name]) return;

      localCache[name] = audio;
      fabricate.update(audioLoadedKey, true);
      resolve(audio);
    });
  },
);
