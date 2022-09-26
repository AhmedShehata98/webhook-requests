import React from "react";
import KeyAndValueInput from "./KeyAndValueInput";

function HeaderInput({ $requestMenu }) {
  return (
    <KeyAndValueInput bodyRequestOption={"text"} $requestMenu={$requestMenu} />
  );
}

export default HeaderInput;
