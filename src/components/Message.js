//state-object privately maintained within component

import React ,{Component}from "react";

class Message extends Component{
constructor(){
    super()//base class constructor
    this.state={
        message:'book now'
    }
}

changeMessage=()=>{
    this.setState({
        message:'thank you for booking'
    })
}
    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={this.changeMessage}>book now</button>
        </div>
        )
        

    }
}
export default Message;