/* global Theme */

/**
 * Pill component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const Pill = ({ category, vPad = 10 }) => fabricate.Column()
  .withStyles({
    borderRadius: '50px',
    backgroundColor: Theme.colors.primary,
    padding: `${vPad}px 12px`,
    color: '#555',
    margin: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    justifyContent: 'center',
  })
  .onClick(() => fabricate.updateState('category', () => category))
  .then((el) => {
    if (fabricate.getState('category') === category) {
      el.addStyles({ color: 'white' });
    }
  })
  .watchState((el, state) => {
    // When category selection changes
    const isSelected = state.category === category;

    el.addStyles({ color: isSelected ? 'white' : '#555' });
  }, ['category']);

/**
 * SoundboardCategorySelect component.
 */
fabricate.declare('SoundboardCategorySelect', () => fabricate.Row()
  .withStyles({ backgroundColor: 'white', padding: '10px' })
  .withChildren([
    Pill({ category: 'all' }).setText('All'),
    Pill({ category: 'favorites', vPad: 3 })
      .withChildren([
        fabricate('img')
          .withAttributes({ src: './assets/images/star_on.png' })
          .withStyles({
            width: '24px',
            height: '24px',
          }),
      ]),
    Pill({ category: 'ia' }).setText('IA'),
    Pill({ category: 'dnd' }).setText('D&D'),
    Pill({ category: 'songs' }).setText('Songs'),
    Pill({ category: 'drg' }).setText('DRG'),
  ]));
