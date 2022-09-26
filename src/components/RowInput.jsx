import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_REQUEST_INPUTM_METHOD } from "../Redux/Slice/AppSlice";
import Button from "./Button";

function RowInput() {
  const {
    app: { inputMethod, bodyRequestType },
  } = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-start min-w-full bg-slate-500">
      <span className="flex justify-end bg-slate-500 px-1 py-2 min-w-full border-b divide-x ">
        <Button
          $extraؤlass={bodyRequestType === "raw" ? "hidden" : "visible"}
          type={"button"}
          onClick={dispatch(
            CHANGE_REQUEST_INPUTM_METHOD({
              inputMethod: inputMethod === "false" ? true : false,
            })
          )}
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
