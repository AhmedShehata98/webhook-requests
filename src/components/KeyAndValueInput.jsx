import React, { useState } from "react";
import Button from "./Button";
import RowInput from "./RowInput";

function KeyAndValueInput() {
  const [inputMethod, setInputMethod] = useState(false);

  return (
    <>
      {inputMethod === false && (
        <table className="table-fixed min-w-full ">
          <thead className=" bg-slate-500 border-b-[2px] border-slate-300">
            <tr className="table-row divide-x-[1px] divide-slate-300">
              <th className="uppercase table-cell py-3 w-14">#</th>
              <th className="uppercase table-cell py-3">key</th>
              <th className="uppercase table-cell py-3">value</th>
              <th className="uppercase table-cell py-3 w-32">
                <Button
                  $extraClass={"m-auto"}
                  onClick={() => setInputMethod((prev) => !prev)}
                >
                  bulk edit
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row bg-slate-800 border-b divide-x">
              <td className="table-cell flex items-center justify-center">
                <input
                  className="mx-auto w-full accent-emerald-700 hover:accent-emerald-600 inline-block"
                  name="query"
                  id="query-check"
                  type={"checkbox"}
                />
              </td>
              <td className="table-cell  flex items-center">
                <input
                  className="w-full h-9 bg-slate-600 outline-none border border-slate-800 hover:border px-2 focus:border-emerald-300 caret-emerald-500"
                  type="text"
                  name="key"
                  placeholder="key .."
                />
              </td>
              <td className="table-cell  flex items-center">
                <input
                  className="w-full h-9 bg-slate-600 outline-none border border-slate-800 hover:border px-2 focus:border-emerald-300 caret-emerald-500"
                  type="text"
                  name="value"
                  placeholder="value.."
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {inputMethod && <RowInput setInputMethod={setInputMethod} />}
    </>
  );
}

export default KeyAndValueInput;
