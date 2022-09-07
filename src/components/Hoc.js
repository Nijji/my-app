import React from "react";

const updatedComponent=OriginalComponent=>{

class NewComponent extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }

  }
  myClick=()=>{
this.setState(
prevState=>{
  return{count:prevState.count+5}
}
)
  }
  render() {
    const {count,myClick}=this.props
    return <OriginalComponent count={this.state.count} myClick={this.myClick} {...this.props}/>
  }
}
return NewComponent
}
export default updatedComponent
