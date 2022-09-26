import React, { useState } from "react";
import KeyAndValueInput from "./KeyAndValueInput";
import RowInput from "./RowInput";

function BodyInput({ $requestMenu, setFormData }) {
  const [bodyRequestOption, setBodyRequestOption] = useState("form-data");

  const handleSelectReqOption = (e) => {
    const id = e.target.id;
    setBodyRequestOption(id);
    e.target.value = "on";
  };

  return (
    <div>
      <ul className="flex items-start justify-center mb-2 gap-4">
        <li className="min-w-20 border border-emerald-600 rounded-full px-4 flex items-center justify-center gap-2 bg-slate-800 ">
          <input
            className="accent-emerald-600"
            type="radio"
            id="none-use"
            name="body-method"
            onChange={handleSelectReqOption}
          />
          <label
            className="leading-7 text-xs text-emerald-100 font-bold capitalize cursor-pointer "
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
            onChange={handleSelectReqOption}
          />
          <label
            className="leading-7 text-xs text-emerald-100 font-bold capitalize cursor-pointer "
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
            onChange={handleSelectReqOption}
          />
          <label
            className="leading-7 text-xs text-emerald-100 font-bold capitalize cursor-pointer "
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
            onChange={handleSelectReqOption}
          />
          <label
            className="leading-7 text-xs text-emerald-100 font-bold capitalize cursor-pointer "
            htmlFor="raw"
          >
            raw
          </label>
        </li>
      </ul>

      {$requestMenu === "body" && bodyRequestOption !== "raw" && (
        <KeyAndValueInput
          bodyRequestOption={bodyRequestOption}
          $requestMenu={$requestMenu}
        />
      )}
      {$requestMenu === "body" && bodyRequestOption === "raw" && (
        <RowInput bodyRequestOption={bodyRequestOption} />
      )}
    </div>
  );
}

export default BodyInput;
