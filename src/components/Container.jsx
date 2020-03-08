import React from 'react';

const Container = ({ style, children }) =>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    ...style,
  }}>
    {children}
  </div>;

export default Container;
