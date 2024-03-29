import { Fabricate, FabricateComponent } from 'fabricate.js';
import { AppState, CategoryType } from '../types';

declare const fabricate: Fabricate<AppState>;

/**
 * Pill component.
 *
 * @param {object} props - Component props.
 * @param {CategoryType} props.category - Category.
 * @returns {HTMLElement} Pill component.
 */
const Pill = ({ category }: { category: CategoryType }) => fabricate('Column')
  .setStyles(({ palette }) => ({
    borderRadius: '50px',
    backgroundColor: palette.primary,
    padding: '3px 10px',
    color: '#555',
    margin: '3px',
    cursor: 'pointer',
    fontWeight: 'bold',
    justifyContent: 'center',
    transition: '0.3s',
  }))
  .onClick(() => fabricate.update({ category }))
  .onUpdate((el, state) => {
    const isSelected = state.category === category;

    el.setStyles({ color: isSelected ? 'white' : '#555' });
  }, [fabricate.StateKeys.Created, 'category']);

/**
 * SoundboardCategorySelect component.
 *
 * @returns {FabricateComponent} SoundboardCategorySelect component.
 */
const SoundboardCategorySelect = () => fabricate('Row')
  .setStyles({
    backgroundColor: '#eee',
    padding: '10px 5px',
    boxShadow: 'black 1px 4px 6px -4px inset',
  })
  .setChildren([
    Pill({ category: 'all' }).setText('All'),
    Pill({ category: 'favorites' })
      .setChildren([
        fabricate('Image', { src: './assets/images/star_on.png' })
          .setStyles({ width: '24px', height: '24px' }),
      ]),
    Pill({ category: 'ia' }).setText('IA'),
    Pill({ category: 'dnd' }).setText('D&D'),
    Pill({ category: 'songs' }).setText('Songs'),
    Pill({ category: 'drg' }).setText('DRG'),
    Pill({ category: 'sot' }).setText('SoT'),
  ]);

export default SoundboardCategorySelect;
