import React from 'react';
import ReactDOM from 'react-dom';

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

const Image = ({ src }) => {
  const style = {
    maxWidth: '700px',
    height: 'auto',
    margin: 'auto',
  };

  return <img style={style} src={src}/>;
};

class Application extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <Image src="./assets/heroes.png"/>
      </Page>
    );
  }

}

ReactDOM.render(<Application/>, document.getElementById('app'));
