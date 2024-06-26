import { Fabricate } from 'fabricate.js';
import { AppState, SoundBoardAsset } from '../types';
import { loadAudio } from '../services/AudioService';
import SoundboardButton from './SoundboardButton';

declare const fabricate: Fabricate<AppState>;

/** Amount of non-repeated sounds */
const RANDOM_HISTORY_LENGTH = 3;

/**
 * Icon showing sound is randomised.
 *
 * @returns {HTMLElement} RandomIcon component.
 */
const RandomIcon = () => fabricate('Image', { src: 'assets/images/shuffle.png' })
  .setStyles({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '24px',
    height: '24px',
    backgroundColor: 'white',
    borderBottomRightRadius: '10px',
    padding: '0px 2px 1px 0px',
  });

/**
 * RandomSoundByte component.
 *
 * @param {object} props - Component props.
 * @param {SoundBoardAsset} props.asset - Asset to use.
 * @returns {HTMLElement} RandomSoundByte component.
 */
const RandomSoundByte = ({ asset }: { asset: SoundBoardAsset }) => {
  const { id, max, soundPrefix } = asset;
  const lastIndexes = [0];

  /**
   * Play a random sound.
   */
  const playRandomSound = async () => {
    let next = lastIndexes[0];
    while (lastIndexes.includes(next)) {
      next = Math.round(Math.random() * (max! - 1));
    }
    lastIndexes.unshift(next);
    while (lastIndexes.length > RANDOM_HISTORY_LENGTH) {
      lastIndexes.pop();
    }

    const audio = await loadAudio(id, `${soundPrefix}${next + 1}`);
    audio.play();
  };

  return SoundboardButton({ asset })
    .addChildren([RandomIcon()])
    .onClick(playRandomSound)
    .onCreate(() => loadAudio(id, `${soundPrefix}1`));
};

export default RandomSoundByte;
