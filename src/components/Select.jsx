import React, { forwardRef } from "react";

const Select = forwardRef((props, ref) => {
  return (
    <select
      ref={ref}
      className={`${props.extraclass} outline-none cursor-pointer bg-slate-600`}
      {...props}
    >
      {props.children}
    </select>
  );
});

export default Select;
