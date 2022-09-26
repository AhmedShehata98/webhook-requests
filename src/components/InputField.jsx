import React from "react";

// redux slice
import {
  GET_REQUEST_BODY,
  GET_REQUEST_HEADERS,
  GET_REQUEST_PARAMS,
} from "../Redux/Slice/AppSlice";

// 3rd party libraries
import { useSelector, useDispatch } from "react-redux";
import { requestMenuItems } from "../utilities/RequestMenuItems";

function InputField(props) {
  const {
    app: {
      requestMenu,
      data: { params, bodyData, headers },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (requestMenu) {
      case requestMenuItems.headers:
        dispatch(
          e.target.name === "key"
            ? GET_REQUEST_HEADERS({ key: e.target.value })
            : GET_REQUEST_HEADERS({ value: e.target.value })
        );
        break;
      case requestMenuItems.body:
        dispatch(
          e.target.name === "key"
            ? GET_REQUEST_BODY({ key: e.target.value })
            : GET_REQUEST_BODY({ value: e.target.value })
        );
        break;
      case requestMenuItems.params:
        dispatch(
          e.target.name === "key"
            ? GET_REQUEST_PARAMS({ ...params, key: e.target.value })
            : GET_REQUEST_PARAMS({ ...params, value: e.target.value })
        );
      default:
        dispatch(
          e.target.name === "key"
            ? GET_REQUEST_PARAMS({ ...params, key: e.target.value })
            : GET_REQUEST_PARAMS({ ...params, value: e.target.value })
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
        if (props.requestMenu === requestMenuItems.headers) {
          props.name === "key" ? headers.key : headers.value;
        } else if (props.requestMenu === requestMenuItems.body) {
          props.name === "key" ? bodyData.key : bodyData.value;
        } else if (props.requestMenu === requestMenuItems.params) {
          props.name === "key" ? params.key : params.value;
        } else {
          props.name === "key" ? params.key : params.value;
        }
      })()}
      {...props}
    />
  );
}

export default React.memo(InputField);
