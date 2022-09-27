import { nanoid } from "nanoid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_REQUEST_INPUTM_METHOD } from "../Redux/Slice/AppSlice";
import Button from "./Button";

function PropertiesHeaddingItems() {
  // const { app } = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <span
      key={nanoid(4)}
      className="bg-slate-400 flex p-[4.5px] text-center divide-x-2"
    >
      <span key={nanoid(4)} className="w-10 font-medium uppercase">
        #
      </span>
      <div key={nanoid(4)} className="w-2/5 font-medium uppercase">
        key
      </div>
      <div key={nanoid(4)} className="w-2/5 font-medium uppercase">
        value
      </div>
      <div key={nanoid(4)} className="w-1/6 flex justify-center">
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
