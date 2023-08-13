import { Fabricate } from 'fabricate.js';
import { AppState, CategoryType, SoundBoardAsset } from '../types';
import { soundAssets } from '../assets';
import SoundByte from '../components/SoundByte';
import RandomSoundByte from '../components/RandomSoundByte';
import SoundboardCategorySelect from '../components/SoundboardCategorySelect';

declare const fabricate: Fabricate<AppState>;

/**
 * To sound byte, depending on type.
 *
 * @param {object} asset - Object from assets.js
 * @returns {HTMLElement} Chosen element.
 */
const toSoundByte = (asset: SoundBoardAsset) => (asset.sound
  ? SoundByte({ asset })
  : RandomSoundByte({ asset }));

/**
 * SoundboardRow component.
 *
 * @returns {HTMLElement} SoundboardRow component.
 */
const SoundboardRow = () => fabricate('Row')
  .setStyles({ justifyContent: 'center', padding: '0px 3px 3px 3px' });

/**
 * Show just the sounds for the chosen category, in rows.
 *
 * @param {object} props - Component props.
 * @param {CategoryType} props.category - Category to use.
 * @param {string[]} props.favorites - Favorites list.
 * @returns {Array<HTMLElement>} List of SoundByte or RandomSoundByte elements.
 */
const SoundRowsForCategory = ({
  category,
  favorites,
}: {
  category: CategoryType,
  favorites: string[],
}) => {
  const rowSize = fabricate.isNarrow() ? 3 : 5;

  const soundList = soundAssets.filter(
    (p) => (category === 'favorites'
      // Just the favorites, regardless of category
      ? favorites.includes(p.id)
      // Sounds for this category and 'all'
      : p.categories.includes(category) || category === 'all'),
  );

  const rows = [];
  const arr = [...soundList];
  while (arr.length) rows.push(arr.splice(0, rowSize));
  return rows.map((items) => SoundboardRow().setChildren(items.map(toSoundByte)));
};

/**
 * SoundboardPage component.
 *
 * @returns {HTMLElement} SoundboardPage component.
 */
const SoundboardPage = () => fabricate('Column')
  .setStyles({ flex: '1' })
  .setChildren([
    SoundboardCategorySelect(),
    fabricate('Column')
      .setStyles({ backgroundColor: '#eee', padding: '0px 10px 20px 10px', flex: '1' })
      .onCreate((el, { category, favorites }) => {
        el.setChildren(SoundRowsForCategory({ category, favorites }));
      })
      .onUpdate((el, { category, favorites }) => {
        el.setChildren(SoundRowsForCategory({ category, favorites }));
      }, ['fabricate:init', 'favorites', 'category', 'tab']),
  ]);

export default SoundboardPage;
