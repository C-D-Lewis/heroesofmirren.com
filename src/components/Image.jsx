import React from 'react';

const Image = ({ src }) => {
  const style = {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    margin: 'auto',
  };

  return <img style={style} src={src}/>;
};

export default Image;
