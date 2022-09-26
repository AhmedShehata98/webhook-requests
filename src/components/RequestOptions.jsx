import React, { useCallback } from "react";

function RequestOptions(props) {
  const handleGetTargetMenu = useCallback((target, e) => {
    e.preventDefault();
    // e.stopPropagation();
    props.setRequestMenu((prev) => (prev = target));
  }, []);
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
        className="pl-3 pr-3 py-1 h-full flex items-center justify-center font-semibold capitalize  hover:text-emerald-400 hover:text-slate-800 activeBtn"
        type="button"
        onClick={(e) => {
          handleGetTargetMenu("params", e);
          handleActiveClass(e);
        }}
      >
        params
      </button>
      <button
        className="pl-3 pr-3 py-1 h-full flex items-center justify-center font-semibold capitalize  hover:text-emerald-400 hover:text-slate-800"
        type="button"
        onClick={(e) => {
          handleGetTargetMenu("headers", e);
          handleActiveClass(e);
        }}
      >
        headers
      </button>
      <button
        className="pl-3 pr-3 py-1 h-full flex items-center justify-center font-semibold capitalize  hover:text-emerald-400 hover:text-slate-800"
        type="button"
        onClick={(e) => {
          handleGetTargetMenu("body", e);
          handleActiveClass(e);
        }}
      >
        body
      </button>
    </nav>
  );
}

export default RequestOptions;
