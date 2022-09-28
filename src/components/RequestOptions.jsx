import React from "react";

// redux slice

// 3rd party libraries
import { useDispatch } from "react-redux";

// utilities

function RequestOptions({ handleGetTargetMenu }) {
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
        data-id="params"
        onClick={(e) => {
          handleGetTargetMenu(e);
          handleActiveClass(e);
        }}
      >
        params
      </button>
      <button
        className="pl-3 pr-3 py-1 h-full flex items-center justify-center font-semibold capitalize  hover:text-emerald-400 "
        type="button"
        data-id="headers"
        onClick={(e) => {
          handleGetTargetMenu(e);
          handleActiveClass(e);
        }}
      >
        headers
      </button>
      <button
        className="pl-3 pr-3 py-1 h-full flex items-center justify-center font-semibold capitalize  hover:text-emerald-400 "
        type="button"
        data-id="body"
        onClick={(e) => {
          handleGetTargetMenu(e);
          handleActiveClass(e);
        }}
      >
        body
      </button>
    </nav>
  );
}

export default RequestOptions;
