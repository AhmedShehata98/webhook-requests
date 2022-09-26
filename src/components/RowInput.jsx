import React from "react";
import Button from "./Button";

function RowInput({ bodyRequestOption, setInputMethod }) {
  return (
    <div className="flex flex-col items-start min-w-full bg-slate-500">
      <span className="flex justify-end bg-slate-500 px-1 py-2 min-w-full border-b divide-x ">
        <Button
          $extraؤlass={bodyRequestOption === "raw" ? "hidden" : "visible"}
          type={"button"}
          onClick={() => setInputMethod((prev) => !prev)}
        >
          key & value edit
        </Button>
      </span>
      <textarea
        className="bg-slate-800 w-full h-32 p-2 placeholder:capitalize placeholder:font-mono outline-none border border-slate-800 focus:border-emerald-400 "
        placeholder="
                row are separateed by new lines
                key and value are separated  by :
                prespend - to any row you want to add but  keep disabled
      "
      ></textarea>
    </div>
  );
}

export default RowInput;
