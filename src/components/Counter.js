import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  myIncrease() {
    this.setState({
      count: this.state.count + 1 
    });
  }
  myDecrease() {
    this.setState({
     count: this.state.count -1 
    });
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.myIncrease()}>plus</button>
        <button onClick={()=>this.myDecrease()}>minus</button>

        <div>
      <h1>Count:{this.state.count}</h1>
        </div>
      </div>
    );
  }
}

export default Counter;
