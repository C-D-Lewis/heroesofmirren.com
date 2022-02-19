import React from 'react';
import { Colors } from '../theme';
import Container from './Container.jsx';

/**
 * TabBar component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
export const TabBar = ({ children }) =>
  <Container
    style={{
      backgroundColor: Colors.secondary,
      width: '100%',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      boxShadow: '2px 2px 3px 1px #5556',
    }}>
    {children}
  </Container>;

/**
 * Tab component.
 *
 * @param {object} props - Component props.
 * @returns {HTMLElement}
 */
export const Tab = ({ children, isSelected, onClick }) =>
  <Container
    style={{
      backgroundColor: isSelected ? Colors.primary : 'initial',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: isSelected ? 'white' : '#555',
      padding: '10px 10px',
      cursor: 'pointer',
      flex: 1,
    }}
    onClick={onClick}>
    {children}
  </Container>;
