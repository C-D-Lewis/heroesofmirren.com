/**
 * TabBar component.
 *
 * @returns {HTMLElement}
 */
const TabBar = () => fabricate.Row()
  .withStyles({
    backgroundColor: Colors.secondary,
    width: '100%',
    height: '50px',
    justifyContent: 'center',
  });

/**
 * Tab component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
const Tab = ({ tab }) => fabricate.Column()
  .withStyles({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#555',
    padding: '10px 10px',
    cursor: 'pointer',
    flex: '1',
  })
  .watchState((el, state) => {
    const isSelected = state.tab === tab;

    el.addStyles({
      backgroundColor: isSelected ? Colors.primary : 'initial',
      color: isSelected ? 'white' : '#555',
    });
  });
