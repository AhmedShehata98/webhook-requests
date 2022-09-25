import React, { useState } from "react";
import Button from "./Button";
import RowInput from "./RowInput";
import KeyAndValueInput from "./KeyAndValueInput";

function QueryInput(props) {
  return (
    <>
      {props.$requestMenu === "params" && <KeyAndValueInput />}
      {props.$requestMenu === "headers" && <KeyAndValueInput />}
    </>
  );
}

export default QueryInput;
