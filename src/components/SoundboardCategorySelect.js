/**
 * Pill component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const Pill = ({ category, vPad = 10 }) => fabricate('Column')
  .setStyles({
    borderRadius: '50px',
    backgroundColor: Theme.colors.primary,
    padding: `${vPad}px 12px`,
    color: '#555',
    margin: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    justifyContent: 'center',
  })
  .onClick(() => fabricate.update({ category }))
  .onUpdate((el, state) => {
    // When category selection changes
    const isSelected = state.category === category;

    el.setStyles({ color: isSelected ? 'white' : '#555' });
  }, ['fabricate:init', 'category']);

/**
 * SoundboardCategorySelect component.
 */
fabricate.declare('SoundboardCategorySelect', () => fabricate('Row')
  .setStyles({ backgroundColor: 'white', padding: '10px' })
  .setChildren([
    Pill({ category: 'all' }).setText('All'),
    Pill({ category: 'favorites', vPad: 3 })
      .setChildren([
        fabricate('Image', { src: './assets/images/star_on.png' })
          .setStyles({ width: '24px', height: '24px' }),
      ]),
    Pill({ category: 'ia' }).setText('IA'),
    Pill({ category: 'dnd' }).setText('D&D'),
    Pill({ category: 'songs' }).setText('Songs'),
    Pill({ category: 'drg' }).setText('DRG'),
  ]));
