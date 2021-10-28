import React from 'react';
import ReactDOM from 'react-dom';

import './style.css'

var interval;
class Counter extends React.Component{
  constructor(){
    super();
    this.state={
      counter:prompt("enter a number"),
    }
  } 

  
componentDidMount(){
  interval=setInterval(()=>{
    this.setState({
      counter:this.state.counter-1,
    });
  },1000);
}
componentDidUpdate(){
  if(this.state.counter === 0){
    clearInterval(interval);
  }
}
 
render(){
  return <h1 className="counter">{this.state.counter}</h1>;
}

}


ReactDOM.render(<Counter/>, document.getElementById("root"));

