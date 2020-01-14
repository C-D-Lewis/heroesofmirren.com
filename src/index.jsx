import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page.jsx';
import Image from './components/Image.jsx';

const Application = () => {
  return (
    <Page>
      <Image src="./assets/logo-new.png" restyle={{ width: 300 }}/>
      <Image src="./assets/minecart.png"/>
      <Image src="./assets/bartop.jpg"/>
      <Image src="./assets/clyde-steph.jpg"/>
      <Image src="./assets/clyde-cat.jpg" restyle={{ width: 300 }}/>
      <Image src="./assets/tackle.jpeg" restyle={{ width: 410 }}/>
      <Image src="./assets/paper-plane.jpg" restyle={{ width: 200 }}/>
      <Image src="./assets/harpie.jpg"/>
      <Image src="./assets/reykjavik.jpg" restyle={{ width: 300 }}/>
      <Image src="./assets/special.jpeg" restyle={{ width: 300 }}/>

      <Image src="./assets/butt-hammer.jpg" restyle={{ width: 200 }}/>
    </Page>
  );
};

ReactDOM.render(<Application/>, document.getElementById('app'));
