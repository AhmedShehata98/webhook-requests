import React from "react";

function RequestPannel(props) {
  return (
    <div
      className="w-full h-max flex flex-col justify-start  items-stretch mb-1"
      {...props}
    >
      {props.children}
    </div>
  );
}

export default RequestPannel;
