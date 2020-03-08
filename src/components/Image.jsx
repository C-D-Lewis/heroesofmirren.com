import React from 'react';

const Image = ({ src, style }) =>
  <img
    style={{
      maxWidth: '500px',
      height: 'auto',
      ...style,
    }}
    src={src}
  />;

export default Image;
