import React from 'react';
import ReactDOM from 'react-dom';
class ChildComponent extends React.Component{

  render() {
    return(
<div>
  <div className="prompt">Add a click handler to this button so that when....</div>
  <button onClick={this.props.onMagicClick}>Do Magic</button>
</div>)}}
class ParentComponent extends React.Component{
   performagic= function(){
    alert('DA DA:D')
  }
  render(){
    return(
      <ChildComponent onMagicClick={this.performagic}/>
    )
  }
}


ReactDOM.render(
  <ParentComponent />,
  document.body
);
