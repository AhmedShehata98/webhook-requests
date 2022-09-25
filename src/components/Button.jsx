import React from "react";

function Button(props) {
  const filled = `flex justify-center items-center gap-3 bg-[#871E07] font-mono uppercase font-bold hover:bg-[#D45235] hover:text-white  px-3 ${props.$extraClass}`;

  const outline = `flex justify-center items-center gap-3 bg-[#871E07] font-mono uppercase font-bold hover:bg-transparent hover:text-[#D45235] border-2 border-[#871E07] hover:border-[#871E07]  px-3 ${props.$extraClass}`;
  return (
    <button className={props.$outline ? outline : filled} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
