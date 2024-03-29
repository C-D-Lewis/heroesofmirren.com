import { Fabricate } from 'fabricate.js';
import { AppState, TabType } from '../types';

declare const fabricate: Fabricate<AppState>;

/**
 * TabBar component.
 *
 * @returns {HTMLElement} TabBar component.
 */
export const TabBar = () => fabricate('Row')
  .setStyles(({ palette }) => ({
    backgroundColor: palette.secondary,
    width: '100%',
    height: fabricate.isNarrow() ? '40px' : '50px',
    justifyContent: 'center',
  }));

/**
 * Tab component.
 *
 * @param {object} props - Component props.
 * @param {TabType} props.tab - Tab used.
 * @returns {HTMLElement} Tab component.
 */
export const Tab = ({ tab }: { tab: TabType }) => fabricate('Column')
  .setStyles({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#555',
    padding: '10px 10px',
    cursor: 'pointer',
    flex: '1',
    justifyContent: 'center',
    transition: '0.3s',
  })
  .onUpdate((el, state) => {
    const isSelected = state.tab === tab;

    el.setStyles(({ palette }) => ({
      backgroundColor: isSelected ? palette.primary : 'initial',
      color: isSelected ? 'white' : '#555',
    }));
  }, [fabricate.StateKeys.Created, 'tab']);
