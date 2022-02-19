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
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const SoundboardCategorySelect = ({ category }) => fabricate('row')
  .withStyles({
    backgroundColor: 'white',
    padding: 10,
  })
  .withChildren([
    Pill({ category: 'all' }).setText('All'),
    <Pill
      isSelected={category === 'favorites'}
      onClick={() => setCategory('favorites')}
      vPad={3}>
      <img
        style={{
          width: 24,
          height: 24,
        }}
        src="./assets/images/star_on.png"
      />
    </Pill>
    <Pill
      isSelected={category === 'ia'}
      onClick={() => setCategory('ia')}>
      IA
    </Pill>
    <Pill
      isSelected={category === 'dnd'}
      onClick={() => setCategory('dnd')}>
      D&D
    </Pill>
    <Pill
      isSelected={category === 'songs'}
      onClick={() => setCategory('songs')}>
      Songs
    </Pill>
    <Pill
      isSelected={category === 'drg'}
      onClick={() => setCategory('drg')}>
      DRG
    </Pill>
  </Container>
);

export default SoundboardCategorySelect;
