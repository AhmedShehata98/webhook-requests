import React from "react";

function RequestCell(props) {
  return (
    <span
      {...props}
      className={"properties-table-cell" + " " + props.extraclass}
    >
      {props.children}
    </span>
  );
}

export default RequestCell;
