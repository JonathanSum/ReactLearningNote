import React from 'react';
import ReactDOM from 'react-dom';
import {styles} from './Style'
import './index.css';
// import bg from './bg.jpg'
class Background extends React.Component{
  // componentWillMount(){
  //   var w = window,
  //   d = document,
  //   e = d.documentElement,
  //   g = d.getElementsByTagName('body')[0],
  //   x = w.innerWidth || e.clientWidth || g.clientWidth,
  //   y = w.innerHeight|| e.clientHeight|| g.clientHeight;
  //
  //   this.setState({x:x,y:y});
  // }
  render(){
    return (
      // <div><img className='bg' src={bg} /></div>)
    <h1>Hello</h1>)
  }
};

ReactDOM.render(
  <Background/>,
  document.getElementById('root')
);
