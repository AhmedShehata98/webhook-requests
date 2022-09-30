import React, { forwardRef } from "react";

const Select = forwardRef((props, ref) => {
  return (
    <select
      ref={ref}
      className={`${props.extraclass} outline-none cursor-pointer  font-semibold bg-sky-500 text-black rounded-tl-xl rounded-bl-xl`}
      {...props}
    >
      {props.children}
    </select>
  );
});

export default Select;
