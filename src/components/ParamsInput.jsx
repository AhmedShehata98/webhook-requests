import React, { useRef, useState } from "react";

// components
import ProparytiesInputListWrapper from "./ProparytiesInputListWrapper";
import PropertiesInputItem from "./PropertiesInputItem";
import PropertiesHeaddingItems from "./PropertiesHeaddingItems";
import RequestCell from "./RequestCell";

// redux slice
import { GET_REQUEST_PARAMS } from "../Redux/Slice/AppSlice";

// 3rd party libraries
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";

// utilities
import { requestMenuItems } from "../utilities/RequestMenuItems";
import { useCallback } from "react";

function ParamsInput() {
  const {
    app: { requestMenu, inputMethod },
  } = useSelector((s) => s);
  const dispatch = useDispatch();
  const paramsDataRef = useRef({
    key: "",
    value: "",
  });
  const keyRef = useRef(null);
  const valueRef = useRef(null);

  const getParamsData = useCallback((key, value) => {
    dispatch(
      GET_REQUEST_PARAMS({
        key,
        value,
      })
    );
  }, []);
  const handleInputsChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    paramsDataRef.current = { ...paramsDataRef.current, [name]: value };
  };

  const handleSendData = (e) => {
    getParamsData(paramsDataRef.current.key, paramsDataRef.current.value);
    // dispatch(
    //   GET_REQUEST_PARAMS({
    //     key: paramsDataRef.current.key,
    //     value: paramsDataRef.current.value,
    //   })
    // );
  };

  return (
    <div
      className={
        requestMenu === requestMenuItems.params ? "inline-block" : "hidden"
      }
    >
      {inputMethod === false && requestMenu === requestMenuItems.params && (
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
                onBlur={handleSendData}
              />
            </RequestCell>
            <RequestCell
              key={nanoid(4)}
              className="w-2/5 flex justify-start items-center font-medium uppercase"
            >
              <input
                ref={valueRef}
                className={"request-input-field"}
                type={"text"}
                name={"value"}
                placeholder="value"
                onChange={handleInputsChange}
                onBlur={handleSendData}
              />
            </RequestCell>
          </PropertiesInputItem>
        </ProparytiesInputListWrapper>
      )}
      {/* {inputMethod === true && requestMenu === requestMenuItems.params && (
        <RowInput />
      )} */}
    </div>
  );
}

export default React.memo(ParamsInput);
