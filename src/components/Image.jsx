import React from 'react';

const Image = ({ src, restyle }) => {
  const style = Object.assign({
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    margin: 'auto',
    paddingTop: 50,
  }, restyle);

  return <img style={style} src={src}/>;
};

export default Image;
