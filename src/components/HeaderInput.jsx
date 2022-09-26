import React, { useState } from "react";

// components
import ProparytiesInputListWrapper from "./ProparytiesInputListWrapper";
import PropertiesHeaddingItems from "./PropertiesHeaddingItems";
import PropertiesInputItem from "./PropertiesInputItem";
import RowInput from "./RowInput";

// 3rd party libraries
import { useSelector } from "react-redux";

// utilities
import { requestMenuItems } from "../utilities/RequestMenuItems";

function HeaderInput() {
  const {
    app: { requestMenu, inputMethod },
  } = useSelector((s) => s);

  return (
    <div
      className={
        requestMenu === requestMenuItems.headers ? "inline-block" : "hidden"
      }
    >
      {inputMethod === false && requestMenu === requestMenuItems.headers && (
        <ProparytiesInputListWrapper>
          <PropertiesHeaddingItems />
          <PropertiesInputItem />
        </ProparytiesInputListWrapper>
      )}
      {inputMethod === true && requestMenu === requestMenuItems.headers && (
        <RowInput />
      )}
    </div>
  );
}

export default React.memo(HeaderInput);
