import { Fabricate } from 'fabricate.js';
import { AppState, TabType } from '../types';
import Theme from '../theme';

declare const fabricate: Fabricate<AppState>;

/**
 * TabBar component.
 *
 * @returns {HTMLElement} TabBar component.
 */
export const TabBar = () => fabricate('Row')
  .setStyles({
    backgroundColor: Theme.palette.secondary,
    width: '100%',
    height: fabricate.isNarrow() ? '40px' : '50px',
    justifyContent: 'center',
  });

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
    // fontFamily: 'PerryGothic',
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
      backgroundColor: isSelected ? Theme.palette.primary : 'initial',
      color: isSelected ? 'white' : '#555',
    });
  }, ['fabricate:init', 'tab']);
