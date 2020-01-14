import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page.jsx';
import Image from './components/Image.jsx';

const Application = () => {

  return (
    <Page>
      <Image src="./assets/heroes.png"/>
    </Page>
  );
};

ReactDOM.render(<Application/>, document.getElementById('app'));
