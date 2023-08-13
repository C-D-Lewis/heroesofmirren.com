import { Fabricate } from 'fabricate.js';
import { AppState } from '../types';

declare const fabricate: Fabricate<AppState>;

const cache: Record<string, HTMLAudioElement> = {};

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

    if (cache[name]) {
      resolve(cache[name]);
      return;
    }

    const audio = new Audio(`./assets/sounds/${name}.mp3`);
    audio.addEventListener('canplaythrough', () => {
      // Only notify once
      if (cache[name]) return;

      cache[name] = audio;
      fabricate.update(audioLoadedKey, true);
      resolve(audio);
    });
  },
);
