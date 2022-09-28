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

const ParamsInput = forwardRef((_, ref) => {
  const dispatch = useDispatch();
  const [clonedInputFields, setClonedInputFields] = useState([]);
  const headersListValueOjects = [];
  const headrsList = useRef([]);
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

  const parseHeadersDataToValues = () => {
    headrsList.current.flatMap((val) =>
      headersListValueOjects.push({ ...Object.values(val) })
    );
  };
  const handleCloneInputsFields = () => {
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
        </PropertiesInputItem>
      </>,
      { key: nanoid(4) }
    );
    setClonedInputFields((prev) => [...prev, clonedReactElement]);
  };
  const handlePushData = (e) => {
    let checkboxElement =
      e.target.parentElement.closest("div").firstChild.firstChild;
    let value = e.target.value;
    let dataList = JSON.stringify(headrsList.current);
    let currentInput = JSON.stringify(paramsDataRef.current);

    if (value !== "") {
      if (dataList.includes(currentInput) === false) {
        headrsList.current.push(paramsDataRef.current);
        parseHeadersDataToValues(headrsList.current);
        handleCloneInputsFields();
        checkboxElement.checked = true;
      } else {
        console.log("includes");
      }
      //
      // send data to rwdux
      dispatch(GET_REQUEST_PARAMS(headersListValueOjects));
    }
  };

  return (
    <div ref={ref} id={"params"}>
      <ProparytiesInputListWrapper>
        <PropertiesHeaddingItems />
        <PropertiesInputItem>
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
        </PropertiesInputItem>
        {clonedInputFields}
      </ProparytiesInputListWrapper>
    </div>
  );
});

export default React.memo(ParamsInput);
