import React from 'react';

/**
 * Image component.
 *
 * @param {Object} props - Component props.
 * @returns {HTMLElement}
 */
const Image = ({ src, style }) =>
  <img
    style={{
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      ...style,
    }}
    src={src}
  />;

export default Image;
