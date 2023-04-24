/**
 * TabBar component.
 *
 * @returns {HTMLElement}
 */
fabricate.declare('TabBar', () => fabricate('Row')
  .setStyles({
    backgroundColor: Theme.colors.secondary,
    width: '100%',
    height: fabricate.isNarrow() ? '40px' : '50px',
    justifyContent: 'center',
  }));

/**
 * Tab component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
fabricate.declare('Tab', ({ tab }) => fabricate('Column')
  .setStyles({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    fontFamily: 'PerryGothic',
    color: '#555',
    padding: '10px 10px',
    cursor: 'pointer',
    flex: '1',
    justifyContent: 'center',
    transition: '0.3s',
  })
  .onUpdate((el, state) => {
    const isSelected = state.tab === tab;

    el.setStyles({
      backgroundColor: isSelected ? Theme.colors.primary : 'initial',
      color: isSelected ? 'white' : '#555',
      textShadow: isSelected
        ? '-2px -2px 0 #555, 2px -2px 0 #555, -2px 2px 0 #555, 2px 2px 0 #555'
        : 'none',
    });
  }, ['fabricate:init', 'tab']));
