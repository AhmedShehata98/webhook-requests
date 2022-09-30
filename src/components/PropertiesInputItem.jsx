import React from "react";

function PropertiesInputItem(props) {
  return (
    <div className="properties-table-row">
      {props.children}
      <span className="w-1/6 flex justify-center"></span>
    </div>
  );
}

export default PropertiesInputItem;
