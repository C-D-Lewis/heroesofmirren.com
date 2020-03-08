import React from 'react';
import { Colors } from '../theme';
import Container from './Container.jsx';

export const TabBar = ({ children }) =>
  <Container
    style={{
      backgroundColor: Colors.secondary,
      width: '100%',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
    {children}
  </Container>;

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
