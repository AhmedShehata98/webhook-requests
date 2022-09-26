import React from "react";

// redux slice
import {
  GET_REQUEST_BODY,
  GET_REQUEST_HEADERS,
  GET_REQUEST_PARAMS,
} from "../Redux/Slice/AppSlice";

// 3rd party libraries
import { useSelector, useDispatch } from "react-redux";

function InputField(props) {
  const {
    app: {
      data: { params, bodyData, headers },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (props.$requestMenu) {
      case "headers":
        dispatch(
          e.target.name === "key"
            ? GET_REQUEST_HEADERS({ key: e.target.value })
            : GET_REQUEST_HEADERS({ value: e.target.value })
        );
        break;
      case "body":
        dispatch(
          GET_REQUEST_BODY({ key: e.target.value, value: e.target.value })
        );
        break;
      case "params":
        dispatch(
          GET_REQUEST_PARAMS({ key: e.target.value, value: e.target.value })
        );
      default:
        dispatch(
          GET_REQUEST_PARAMS({ key: e.target.value, value: e.target.value })
        );
        break;
    }
  };
  return (
    <input
      className={
        props.type === "checkbox" ? "checkbox-input" : "request-input-field"
      }
      onChange={handleChange}
      value={(function () {
        if (props.$requestMenu === "headers") {
          props.name === "key" ? headers.key : headers.value;
        } else if (props.$requestMenu === "body") {
          props.name === "key" ? bodyData.key : bodyData.value;
        } else if (props.$requestMenu === "params") {
          props.name === "key" ? params.key : params.value;
        } else {
          props.name === "key" ? params.key : params.value;
        }
      })()}
      {...props}
    />
  );
}

export default InputField;
