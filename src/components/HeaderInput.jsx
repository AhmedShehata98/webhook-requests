import React, { useRef, useState } from "react";

// components
import ProparytiesInputListWrapper from "./ProparytiesInputListWrapper";
import PropertiesHeaddingItems from "./PropertiesHeaddingItems";
import PropertiesInputItem from "./PropertiesInputItem";
import RowInput from "./RowInput";

// 3rd party libraries
import { useSelector } from "react-redux";

// utilities
import { requestMenuItems } from "../utilities/RequestMenuItems";
import RequestCell from "./RequestCell";
import { nanoid } from "nanoid";

function HeaderInput() {
  const {
    app: { requestMenu, inputMethod },
  } = useSelector((s) => s);
  //
  const HeadersDataRef = useRef({
    key: "",
    value: "",
  });
  const keyRef = useRef(null);
  const valueRef = useRef(null);

  const handleInputsChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    HeadersDataRef.current = { ...HeadersDataRef.current, [name]: value };
  };

  return (
    <div
      className={
        requestMenu === requestMenuItems.headers ? "inline-block" : "hidden"
      }
    >
      {inputMethod === false && requestMenu === requestMenuItems.headers && (
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
              />
            </RequestCell>
          </PropertiesInputItem>
        </ProparytiesInputListWrapper>
      )}
      {inputMethod === true && requestMenu === requestMenuItems.headers && (
        <RowInput />
      )}
    </div>
  );
}

export default React.memo(HeaderInput);
