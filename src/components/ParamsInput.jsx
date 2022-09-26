import React, { useState } from "react";

// components
import ProparytiesInputListWrapper from "./ProparytiesInputListWrapper";
import PropertiesInputItem from "./PropertiesInputItem";
import PropertiesHeaddingItems from "./PropertiesHeaddingItems";
import RowInput from "./RowInput";

// 3rd party libraries
import { useSelector } from "react-redux";

// utilities
import { requestMenuItems } from "../utilities/RequestMenuItems";

function ParamsInput() {
  const [inputMethod, setInputMethod] = useState(false);
  const {
    app: { requestMenu },
  } = useSelector((s) => s);

  return (
    <div
      className={
        requestMenu === requestMenuItems.params ? "inline-block" : "hidden"
      }
    >
      {inputMethod === false && requestMenu === requestMenuItems.params && (
        <ProparytiesInputListWrapper>
          <PropertiesHeaddingItems setInputMethod={setInputMethod} />
          <PropertiesInputItem></PropertiesInputItem>
        </ProparytiesInputListWrapper>
      )}
      {inputMethod === true && requestMenu === requestMenuItems.params && (
        <RowInput setInputMethod={setInputMethod} />
      )}
    </div>
  );
}

export default React.memo(ParamsInput);
