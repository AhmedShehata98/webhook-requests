import React, { useState } from "react";
import ProparytiesInputListWrapper from "./ProparytiesInputListWrapper";
import PropertiesHeaddingItems from "./PropertiesHeaddingItems";
import PropertiesInputItem from "./PropertiesInputItem";
import RowInput from "./RowInput";

// 3rd party libraries
import { useDispatch, useSelector } from "react-redux";

// redux slice
import { CHANGE_BODY_REQUEST_TYPE } from "../Redux/Slice/AppSlice";

function BodyInput() {
  const {
    app: { requestMenu, inputMethod },
  } = useSelector((s) => s);
  const dispatch = useDispatch();

  const handleSelectReqOption = (e) => {
    const id = e.target.id;
    dispatch(CHANGE_BODY_REQUEST_TYPE({ bodyRequestType: id }));
    e.target.value = "on";
  };

  return (
    <div className={requestMenu === "body" ? "inline-block" : "hidden"}>
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
      {inputMethod === false && requestMenu === "body" && (
        <ProparytiesInputListWrapper>
          <PropertiesHeaddingItems />
          <PropertiesInputItem />
        </ProparytiesInputListWrapper>
      )}
      {inputMethod === true && requestMenu === "body" && <RowInput />}
    </div>
  );
}

export default React.memo(BodyInput);
