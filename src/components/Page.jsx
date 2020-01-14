import React from 'react';

const Page = ({ children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  };

  return <div style={style}>{children}</div>;
};

export default Page;
