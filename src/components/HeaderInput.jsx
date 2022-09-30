import React, { forwardRef, useEffect, useRef, useState } from "react";

// components
import ProparytiesInputListWrapper from "./ProparytiesInputListWrapper";
import PropertiesHeaddingItems from "./PropertiesHeaddingItems";
import PropertiesInputItem from "./PropertiesInputItem";
import RowInput from "./RowInput";

// 3rd party libraries
import { useDispatch } from "react-redux";

// utilities
import RequestCell from "./RequestCell";
import { nanoid } from "nanoid";
import { GET_REQUEST_HEADERS } from "../Redux/Slice/AppSlice";

const HeaderInput = forwardRef((_, ref) => {
  const dispatch = useDispatch();
  const [clonedInputFields, setClonedInputFields] = useState([]);
  const headrsList = useRef([]);
  const paramsDataRef = useRef({
    key: "",
    value: "",
  });
  const keyRef = useRef(null);
  const valueRef = useRef(null);
  const handleInputsChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    paramsDataRef.current = { ...paramsDataRef.current, [name]: value };
  };
  const handleCloneInputsFields = () => {
    let clonedReactElement = React.cloneElement(
      <>
        <PropertiesInputItem>
          <RequestCell key={nanoid(4)} extraclass=" w-11">
            <input
              className="accent-emerald-400"
              type={"checkbox"}
              name={"selected-property"}
            />
          </RequestCell>
          <RequestCell key={nanoid(4)}>
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
        headrsList.current.push({ ...Object.values(paramsDataRef.current) });
        handleCloneInputsFields();
        // send data to rwdux
        dispatch(GET_REQUEST_HEADERS(headrsList));
        checkboxElement.checked = true;
      } else {
        // do nothing
      }
    }
  };

  useEffect(() => {
    if (clonedInputFields?.length >= 1) {
    } else {
      handleCloneInputsFields();
    }
  }, []);

  return (
    <div ref={ref} className={"hidden"} id={"headers"}>
      <ProparytiesInputListWrapper>
        <PropertiesHeaddingItems />
        {clonedInputFields}
      </ProparytiesInputListWrapper>
    </div>
  );
});

export default React.memo(HeaderInput);
