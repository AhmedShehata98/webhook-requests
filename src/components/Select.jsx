import React from "react";

function Select(props) {
  return (
    <select
      className={`${props.$extraClass} outline-none cursor-pointer bg-slate-600`}
      {...props}
    >
      {props.children}
    </select>
  );
}

export default Select;
