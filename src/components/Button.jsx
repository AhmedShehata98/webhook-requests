import React from "react";

function Button(props) {
  const filled = `flex justify-center items-center gap-3 bg-sky-500 text-black font-mono uppercase font-bold hover:bg-sky-600  px-3 ${props.extraclass}`;

  const outline = `flex justify-center items-center gap-3 bg-sky-500 font-mono uppercase font-bold hover:bg-transparent hover:text-emerald-600 border-2 border-sky-500 hover:border-emerald-600  px-3 ${props.extraclass}`;
  return (
    <button className={props.$outline ? `${outline}` : `${filled} `} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
