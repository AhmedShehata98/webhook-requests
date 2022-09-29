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
import { useDispatch } from "react-redux";

// utilities
import { requestMenuItems } from "../utilities/RequestMenuItems";
import { useCallback } from "react";
import { forwardRef } from "react";
import { useEffect } from "react";

const ParamsInput = forwardRef((_, ref) => {
  const dispatch = useDispatch();
  const [clonedInputFields, setClonedInputFields] = useState([]);
  const paramsList = useRef(["?"]);
  const IsCloned = useRef(false);
  const indexOfTargetParam = useRef(-1);
  const paramsDataRef = useRef({
    key: "?",
    value: "",
  });
  const keyRef = useRef(null);
  const valueRef = useRef(null);
  //
  const handleInputsChange = (e) => {
    let checkbox = e.target.parentElement.closest("div").firstChild.firstChild;
    let name = e.target.name;
    let value = e.target.value;

    if (Boolean(name === "key")) {
      paramsDataRef.current = { ...paramsDataRef.current, key: value };
      value?.length >= 2 ? (IsCloned.current = false) : null;
    }
    if (Boolean(name === "value")) {
      paramsDataRef.current = { ...paramsDataRef.current, value: value };
    }

    if (Boolean(name === "value")) {
      Boolean(value?.length == 0) ? (checkbox.checked = false) : null;

      if (
        IsCloned.current === false &&
        paramsDataRef.current.value?.length >= 2
      )
        handleCloneElement();
    }

    if (Boolean(value) && Boolean(name === "key")) {
      paramsList.current[indexOfTargetParam] = value;
    }

    if (Boolean(value) && Boolean(name === "value")) {
    }
  };

  const handleCloneElement = () => {
    let clonedReactElement = React.cloneElement(
      <>
        <PropertiesInputItem>
          <RequestCell
            key={nanoid(4)}
            className="w-11 font-medium uppercase flex justify-center items-center"
          >
            <input
              className="accent-emerald-400"
              type={"checkbox"}
              name={"selected-property"}
            />
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
              onKeyUp={handleInputsChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
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
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </RequestCell>
        </PropertiesInputItem>
      </>,
      { key: nanoid(4) }
    );
    setClonedInputFields((prev) => [...prev, clonedReactElement]);

    // iam finished form cloning
    IsCloned.current = true;
  };

  const handleBlur = ({ target }) => {
    let checkbox = target.parentElement.closest("div").firstChild.firstChild;
    let name = target.name;
    let value = target.value;
    let dataList = JSON.stringify(paramsList.current);
    let currentInput = JSON.stringify(paramsDataRef.current);
    //
    if (Boolean(value) && dataList.includes(currentInput) === false) {
      // if key field
      if (Boolean(name === "key")) {
        paramsList.current.push(paramsDataRef.current.key);
        paramsList.current.push("=");
        dispatch(GET_REQUEST_PARAMS(paramsList.current.join("")));
      }
      // if value field
      if (Boolean(name === "value")) {
        paramsList.current.push(paramsDataRef.current.value);
        paramsList.current.push("&");
        dispatch(GET_REQUEST_PARAMS(paramsList.current.join("")));
        //
        Boolean(value?.length >= 2) ? (checkbox.checked = true) : null;
      }
    }
  };

  const handleFocus = ({ target }) => {
    let name = target.name;
    let value = target.value;
    //
    indexOfTargetParam.current = paramsList.current.indexOf(value);
  };
  useEffect(() => {
    if (clonedInputFields?.length >= 1) {
    } else {
      handleCloneElement();
    }
  }, []);

  return (
    <div ref={ref} id={"params"}>
      <ProparytiesInputListWrapper>
        <PropertiesHeaddingItems />
        {/* <PropertiesInputItem>
          <RequestCell
            key={nanoid(4)}
            className="w-11 font-medium uppercase flex justify-center items-center"
          >
            <input
              type={"checkbox"}
              name={"selected-property"}
              className={"accent-emerald-400"}
            />
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
              onBlur={handlePushData}
            />
          </RequestCell>
        </PropertiesInputItem> */}
        {clonedInputFields}
      </ProparytiesInputListWrapper>
    </div>
  );
});

export default React.memo(ParamsInput);
