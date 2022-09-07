//to share common functionality between components without repeating code
import React, { Component } from "react";
import updatedComponent from "./Hoc";
class Hoc1 extends Component {
  render() {
    const { count, myClick } = this.props;
    return (
      <button onClick={myClick}>
        {this.props.name} clicked the HOC button {count} times
      </button>
    );
  }
}

export default updatedComponent(Hoc1);
