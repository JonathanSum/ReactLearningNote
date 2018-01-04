import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props)
    this.state={color:green}
    //You just wrote a component class method that called this.setState(). When you write a component class method that uses this, then you need to bind that method inside of your constructor function!
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    const changingColor = this.state.color==green ? yellow : green

    this.setState({color : changingColor})
  }
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          <button onClick={this.changeColor}>
          Change color
            </button>
        </h1>
      </div>
    );
  }
}
ReactDOM.render(<Toggle/>, document.getElementById('app'))
