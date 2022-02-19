let cache = {};

/**
 * Load an audio file if not cached already.
 *
 * @param {string} id - Sound ID.
 * @param {string} name - File name.
 * @returns {Audio} Loaded Audio.
 */
const loadAudio = (id, name) => new Promise((resolve) => {
  if (cache[name]) {
    resolve(cache[name]);
    return;
  }

  const audio = new Audio(`./assets/sounds/${name}.mp3`);
  audio.addEventListener('canplaythrough', () => {
    // Only notify once
    if (cache[name]) return;

    cache[name] = audio;
    fabricate.updateState(`audioLoaded:${id}`, () => true);
    resolve(audio);
  });
});
