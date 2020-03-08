import React from 'react';

const Container = ({ style, children, ...rest }) =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }}
    {...rest}>
    {children}
  </div>;

export default Container;
