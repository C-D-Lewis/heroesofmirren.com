import React from 'react';

const Image = ({ src, style }) =>
  <img
    style={{
      maxWidth: '500px',
      height: 'auto',
      paddingTop: 50,
      ...style,
    }}
    src={src}
  />;

export default Image;
