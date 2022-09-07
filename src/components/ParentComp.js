//re-renders without change in state/props
import React, { Component } from 'react'
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'vishwas'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({name:' ken'})
        },2000);
    }
    
  render() {

    // console.log('parent comp render');
    return (
      <div>
        <MemoComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
