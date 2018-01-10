import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/user-list'
import UserDetail from './containers/user-detail'
const init=      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>




class App extends Component {
  
  render() {
    return (
      <div>
  <div>
    <h2>Username List:</h2>
    <UserList/>
    <hr/>
    <h2>User Details:</h2>
    <UserDetail/>
  </div>
  </div>
    );
  }
}

export default App;

/*
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
let store = createStore(counter);
store = createStore(counter)
store.subscribe(() => console.log(store.getState))
store.dispatch({type: 'INCREMENT'});

store.dispatch({type: 'INCREMENT'});

store.dispatch({type: 'DECREMENT'});
*/