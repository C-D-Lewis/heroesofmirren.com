/**
 * Pill component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const Pill = ({ category, vPad = 8 }) => fabricate('div')
  .withStyles({
    borderRadius: 50,
    backgroundColor: Colors.primary,
    padding: `${vPad}px 12px`,
    color: '#555',
    margin: 5,
    cursor: 'pointer',
    fontWeight: 'bold',
  })
  .onClick(() => fabricate.updateState('category', () => category))
  .watchState((el, state) => {
    // When category selection changes
    const isSelected = state.category === category;

    el.addStyles({ color: isSelected ? 'white': '#555' });
  });

/**
 * SoundboardCategorySelect component.
 *
 * @returns {HTMLElement}
 */
const SoundboardCategorySelect = () => fabricate('row')
  .withStyles({
    backgroundColor: 'white',
    padding: 10,
  })
  .withChildren([
    Pill({ category: 'all' }).setText('All'),
    Pill({ category: 'favorites', vPad: 3 })
      .withChildren([
        fabricate('img')
          .withAttributes({ src: './assets/images/star_on.png' })
          .withStyles({
            width: 24,
            height: 24,
          }),
      ]),
    Pill({ category: 'ia' }).setText('IA'),
    Pill({ category: 'dnd' }).setText('D&D'),
    Pill({ category: 'songs' }).setText('Songs'),
    Pill({ category: 'drg' }).setText('DRG'),
  ]);
