import React, { useRef, useState } from "react";
import ProparytiesInputListWrapper from "./ProparytiesInputListWrapper";
import PropertiesHeaddingItems from "./PropertiesHeaddingItems";
import PropertiesInputItem from "./PropertiesInputItem";
import RowInput from "./RowInput";

// 3rd party libraries
import { useDispatch, useSelector } from "react-redux";

// redux slice
import { CHANGE_BODY_REQUEST_TYPE } from "../Redux/Slice/AppSlice";
import RequestCell from "./RequestCell";
import { nanoid } from "nanoid";
import Select from "./Select";

function BodyInput() {
  const {
    app: { requestMenu, inputMethod, bodyRequestType },
  } = useSelector((s) => s);
  const dispatch = useDispatch();

  const handleSelectReqOption = (e) => {
    const id = e.target.id;
    dispatch(CHANGE_BODY_REQUEST_TYPE({ bodyRequestType: id }));
    e.target.value = "on";
  };

  const bodyDataRef = useRef({
    key: "",
    value: "",
  });
  const [inputTypeSelector, setInputTypeSelector] = useState("text");
  const keyRef = useRef(null);
  const valueRef = useRef(null);

  const handleInputsChange = (e) => {
    let name = e.target.name;
    let type = e.target.type;
    let file = e.target?.files[0];
    let value = e.target.value;
    if (type === "text") {
      bodyDataRef.current = { ...bodyDataRef.current, [name]: value };
    }
    if (type === "file") {
      bodyDataRef.current = { ...bodyDataRef.current, [name]: file };
    }
  };

  const handleTypeSelector = (e) => {
    let value = e.target.value;
    setInputTypeSelector(value);
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
          <PropertiesInputItem>
            <RequestCell
              key={nanoid(4)}
              className="w-11 font-medium uppercase flex justify-center items-center"
            >
              <input type={"checkbox"} name={"selected-property"} />
            </RequestCell>
            <RequestCell
              key={nanoid(4)}
              className="w-2/5 flex justify-start items-center  font-medium uppercase relative"
            >
              <input
                ref={keyRef}
                className={"request-input-field"}
                type={"text"}
                name={"key"}
                placeholder="key"
                onChange={handleInputsChange}
              />
              {bodyRequestType === "form-data" && (
                <Select
                  extraclass={
                    "absolute z-10 top-50 right-4 py-[1.5px] px-2 rounded-full capitalize border border-emerald-100 !important"
                  }
                  name={"input-type"}
                  onChange={handleTypeSelector}
                  value={inputTypeSelector}
                >
                  <option value="file">file</option>
                  <option value="text">text</option>
                </Select>
              )}
            </RequestCell>
            <RequestCell
              key={nanoid(4)}
              className="w-2/5 flex justify-start items-center font-medium uppercase "
            >
              <input
                ref={valueRef}
                className={"request-input-field"}
                type={inputTypeSelector}
                name={"value"}
                placeholder="value"
                onChange={handleInputsChange}
              />
            </RequestCell>
          </PropertiesInputItem>
        </ProparytiesInputListWrapper>
      )}
      {inputMethod === true && requestMenu === "body" && <RowInput />}
    </div>
  );
}

export default React.memo(BodyInput);
