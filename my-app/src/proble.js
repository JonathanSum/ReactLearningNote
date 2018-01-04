import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Board extends React.Component{

  render(){
    var className ="board";
    if(this.props.selected){
      className +=" selected";
    }
    return(
      <div className={className}>
        {this.props.index +1}
      </div>
    )
  }
}
class BoardSwitcher extends React.Component{
  constructor(props){
    super(props);
    this.state ={selectedIndex: 0}
  }
onToggleClic=function (evt){
    this.setState({
      selectedIndex: (this.state.selectedIndex+1)%this.props.numBoards
    })
  }
  render(){
      var boards =[];
      for (var ii=0; ii<this.props.numBoards;ii++){
        var isSelected =ii === this.state.selectedIndex;
        boards.push(
          <Board index={ii} selected={isSelected} key={ii} />
        )
      }
    return(
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.onToggleClick}>Toggle</button>
      </div>)
  }
}
ReactDOM.render(
  <BoardSwitcher numBoards={3}/>,
    document.getElementById('root')
)
