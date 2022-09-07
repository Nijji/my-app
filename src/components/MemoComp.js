//prevents re-render without any state/props change for functional components

import React from 'react'

function MemoComp({name}) {
  // console.log('render memo comp');
  return (
    <div>
     {name} 
    </div>
  )
}

export default React.memo(MemoComp) 
