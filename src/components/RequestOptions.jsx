import React, { useCallback } from "react";

// redux slice
import { CHANGE_REQUEST_MENU } from "../Redux/Slice/AppSlice";

// 3rd party libraries
import { useDispatch } from "react-redux";

// utilities
import { requestMenuItems } from "../utilities/RequestMenuItems";

function RequestOptions() {
  const dispatch = useDispatch();

  const handleGetTargetMenu = useCallback((target) => {
    dispatch(CHANGE_REQUEST_MENU({ requestMenu: target }));
  }, []);
  //
  const handleActiveClass = ({ target }) => {
    let buttons = Array.from(target.parentElement.children);
    buttons.forEach(
      (button) =>
        button.classList.contains("activeBtn") &&
        button.classList.remove("activeBtn")
    );
    target.classList.add("activeBtn");
  };
  return (
    <nav className="w-max h-max flex flex-row mb-2">
      <button
        className="pl-3 pr-3 py-1 h-full flex items-center justify-center font-semibold capitalize  hover:text-emerald-400  activeBtn"
        type="button"
        onClick={(e) => {
          handleGetTargetMenu(requestMenuItems.params, e);
          handleActiveClass(e);
        }}
      >
        params
      </button>
      <button
        className="pl-3 pr-3 py-1 h-full flex items-center justify-center font-semibold capitalize  hover:text-emerald-400 "
        type="button"
        onClick={(e) => {
          handleGetTargetMenu(requestMenuItems.headers, e);
          handleActiveClass(e);
        }}
      >
        headers
      </button>
      <button
        className="pl-3 pr-3 py-1 h-full flex items-center justify-center font-semibold capitalize  hover:text-emerald-400 "
        type="button"
        onClick={(e) => {
          handleGetTargetMenu(requestMenuItems.body, e);
          handleActiveClass(e);
        }}
      >
        body
      </button>
    </nav>
  );
}

export default RequestOptions;
