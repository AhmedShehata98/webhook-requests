import { nanoid } from "nanoid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_REQUEST_INPUTM_METHOD } from "../Redux/Slice/AppSlice";
import Button from "./Button";

function PropertiesHeaddingItems() {
  // const { app } = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <span key={nanoid(4)} className="properties-headding-row ">
      <span key={nanoid(4)} className="w-11 properties-headding-cell">
        #
      </span>
      <div key={nanoid(4)} className="properties-headding-cell">
        key
      </div>
      <div key={nanoid(4)} className="properties-headding-cell">
        value
      </div>
      <div
        key={nanoid(4)}
        className="w-1/6 h-inherit flex items-center justify-center flex justify-center"
      >
        {/* <Button
          type={"button"}
          onClick={() =>
            dispatch(
              CHANGE_REQUEST_INPUTM_METHOD({ inputMethod: !app?.inputMethod })
            )
          }
        >
          edit bulk
        </Button> */}
      </div>
    </span>
  );
}

export default React.memo(PropertiesHeaddingItems);
