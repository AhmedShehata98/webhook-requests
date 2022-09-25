import React from "react";
import KeyAndValueInput from "./KeyAndValueInput";

function BodyInput() {
  return (
    <div>
      <ul className="flex items-start justify-center mb-2 gap-4">
        <li className="min-w-20 border border-emerald-600 rounded-full px-4 flex items-center justify-center gap-2 bg-slate-800 ">
          <input
            className="accent-emerald-600"
            type="radio"
            id="none-use"
            name="body-method"
          />
          <label
            className="leading-7 text-xs text-emerald-100 font-bold capitalize "
            htmlFor="none-use"
          >
            none
          </label>
        </li>
        <li className="min-w-20 border border-emerald-600 rounded-full px-4 flex items-center justify-center gap-2 bg-slate-800 ">
          <input
            className="accent-emerald-600"
            type="radio"
            id="form-data"
            name="body-method"
            checked
          />
          <label
            className="leading-7 text-xs text-emerald-100 font-bold capitalize "
            htmlFor="form-data"
          >
            form-data
          </label>
        </li>
        <li className="min-w-20 border border-emerald-600 rounded-full px-4 flex items-center justify-center gap-2 bg-slate-800 ">
          <input
            className="accent-emerald-600"
            type="radio"
            id="x-www-form-urlencoded"
            name="body-method"
          />
          <label
            className="leading-7 text-xs text-emerald-100 font-bold capitalize "
            htmlFor="x-www-form-urlencoded"
          >
            x-www-form-urlencoded
          </label>
        </li>
        <li className="min-w-20 border border-emerald-600 rounded-full px-4 flex items-center justify-center gap-2 bg-slate-800 ">
          <input
            className="accent-emerald-600"
            type="radio"
            id="raw"
            name="body-method"
          />
          <label
            className="leading-7 text-xs text-emerald-100 font-bold capitalize "
            htmlFor="raw"
          >
            raw
          </label>
        </li>
      </ul>
      <KeyAndValueInput />
    </div>
  );
}

export default BodyInput;
