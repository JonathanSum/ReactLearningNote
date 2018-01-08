import React from 'react';
import ReactDOM from 'react-dom';

export class Example extends React.Component {
  componentWillMount() {
    alert('component is about to mount!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);

setTimeout(() => {
  ReactDOM.render(
    <div><h1>Hello?</h1></div>,
    document.getElementById('root')
  );
}, 2000);
