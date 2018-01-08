import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props){
    super(props)
    this.state = {userInput:""}
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(e){
    this.setState({userInput: e.target.value})
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('root')
);

// Think of a typical <input type='text' /> element. It appears onscreen as a text box. If you need to know what text is currently in the box, then you can ask the <input />, possibly with some code like this:
let input = document.querySelector('input[type="text"]');

let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.
