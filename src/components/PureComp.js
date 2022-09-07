//prevents re-render without any state/props change for class components
import React, { PureComponent } from 'react'
 class PureComp extends PureComponent {
  render() {
    // console.log('pure comp render');
    return (
      <div>
        pure component{this.props.name}
      </div>
    )
  }
}

export default PureComp
