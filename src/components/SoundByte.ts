import { SoundBoardAsset } from '../types';
import { loadAudio } from '../services/AudioService';
import SoundboardButton from './SoundboardButton';

/**
 * SountByte component.
 *
 * @param {object} props - Component props.
 * @param {SoundBoardAsset} props.asset - Asset to use.
 * @returns {HTMLElement} SoundByte component.
 */
const SoundByte = ({ asset }: { asset: SoundBoardAsset }) => {
  const { id, sound } = asset;
  let audio: HTMLAudioElement;

  loadAudio(id, sound!).then((a) => {
    audio = a;
  });

  return SoundboardButton({ asset }).onClick(() => audio.play());
};

export default SoundByte;
