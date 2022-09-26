import { nanoid } from "nanoid";
import React from "react";
import Button from "./Button";

function PropertiesHeaddingItems({ setInputMethod }) {
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
        <Button type={"button"} onClick={() => setInputMethod((prev) => !prev)}>
          edit bulk
        </Button>
      </div>
    </span>
  );
}

export default React.memo(PropertiesHeaddingItems);
