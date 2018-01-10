import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var message


var a1 ="Hello?"
class App extends Component {
  render() {
          for (var i = 0; i < 10; i++) {
            a1 = i
          }
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h3>{a1}</h3>
        </p>
      </div>
    );
  }
}

export default App;
