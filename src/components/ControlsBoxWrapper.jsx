import React from "react";

function ControlsBoxWrapper(props) {
  return <span className="flex flex-row h-11 mb-2">{props.children}</span>;
}

export default ControlsBoxWrapper;
