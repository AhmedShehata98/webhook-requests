import React from "react";

function InputField(props) {
  console.table(props);
  const check =
    "mx-auto w-full accent-emerald-700 hover:accent-emerald-600 inline-block";
  const text =
    "w-full h-8 bg-slate-600 outline-none border border-slate-800 hover:border px-2 focus:border-emerald-300 caret-emerald-500";
  return (
    <input
      className={(props) => {
        switch (props.type) {
          case "text":
            return text;
            break;
          case "radio":
            return check;
            break;
          case "checkbox":
            return check;
            break;
          default:
            return text;
        }
      }}
      {...props}
    />
  );
}

export default InputField;
