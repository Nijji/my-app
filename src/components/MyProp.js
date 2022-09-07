//similar to HOC pattern to share functionality between components using a prop whose value is a function
import React, { Component } from 'react'


class MyProp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  myUpdate=()=>{
    this.setState(prevState=>{
      return {count:prevState.count+1}
    })
  }
  render() {
    const {count}=this.state
    return  <button onClick={this.myUpdate}>clicked {count} times</button>
    
  }
}

export default MyProp

