import React from "react";
import KeyAndValueInput from "./KeyAndValueInput";

function ParamsInput({ $requestMenu }) {
  return (
    <>
      {$requestMenu === "params" && (
        <KeyAndValueInput
          $requestMenu={$requestMenu}
          bodyRequestOption={"text"}
        />
      )}
    </>
  );
}

export default ParamsInput;
