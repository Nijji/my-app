//provides a way to render children into a dom node that exists outside the dom hierachy of the parent component
import React from "react";
import  ReactDOM  from "react";

function Portal() {
  return ReactDOM.createPortal(
    <h1>portal demo</h1>,
    document.getElementById("portal-root")
  );
}

export default Portal;
