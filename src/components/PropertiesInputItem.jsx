import React, { useCallback, useRef, useState } from "react";

// 3rd party libraries
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, useFormikContext } from "formik";

// components
import Select from "./Select";

//redux slice
import {
  GET_REQUEST_BODY,
  GET_REQUEST_HEADERS,
  GET_REQUEST_PARAMS,
} from "../Redux/Slice/AppSlice";
import InputField from "./InputField";

function PropertiesInputItem({
  bodyRequestOption,
  $requestMenu,
  handleInputChange,
  formData,
}) {
  return (
    <div className="bg-slate-700 flex text-center ">
      <span
        key={nanoid(4)}
        className="w-11 font-medium uppercase flex justify-center items-center"
      >
        <InputField
          type={"checkbox"}
          name={"selected-property"}
          $requestMenu={$requestMenu}
        />
      </span>
      {/* key input */}
      <span
        key={nanoid(4)}
        className="w-2/5 flex justify-start items-center  font-medium uppercase relative"
      >
        <InputField
          type={"text"}
          name={"key"}
          placeholder="key"
          $requestMenu={$requestMenu}
        />
        {/* {bodyRequestOption === "form-data" && (
          <Select
            extraclass={"absolute z-10 top-50 right-8 py-1 bg-emerald-700"}
            name={"input-type"}
            onChange={(target) => {
              target.value === "text"
                ? setFileTypeSelectd("text")
                : setFileTypeSelectd("file");
            }}
          >
            <option value="file">file</option>
            <option value="text">text</option>
          </Select>
        )} */}
      </span>

      <span
        key={nanoid(4)}
        className="w-2/5 flex justify-start items-center font-medium uppercase"
      >
        <InputField
          className="request-input-field"
          type={"text"}
          name={"value"}
          placeholder="value"
          $requestMenu={$requestMenu}
        />
      </span>
    </div>
  );
}

export default PropertiesInputItem;
