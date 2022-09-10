/* global Theme */

/**
 * TabBar component.
 *
 * @returns {HTMLElement}
 */
fabricate.declare('TabBar', () => fabricate.Row()
  .withStyles({
    backgroundColor: Theme.colors.secondary,
    width: '100%',
    height: '50px',
    justifyContent: 'center',
  }));

/**
 * Tab component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
fabricate.declare('Tab', ({ tab }) => fabricate.Column()
  .withStyles({
    fontSize: fabricate.isMobile() ? '1.2rem' : '1.5rem',
    fontWeight: 'bold',
    color: '#555',
    padding: '10px 10px',
    cursor: 'pointer',
    flex: '1',
    justifyContent: 'center',
  })
  .watchState((el, state, updatedKey) => {
    if (updatedKey !== 'tab') return;

    const isSelected = state.tab === tab;
    el.addStyles({
      backgroundColor: isSelected ? Theme.colors.primary : 'initial',
      color: isSelected ? 'white' : '#555',
    });
  }));
