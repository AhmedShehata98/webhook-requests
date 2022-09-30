import React from "react";
import { Link } from "react-router-dom";

function Asidebar() {
  return (
    <aside
      style={{ height: "calc(100vh - 56px)" }}
      className="w-12 fixed bg-gray-900 flex flex-col justify-start items-center border-r border-gray-400"
    >
      <button
        className="w-8 h-8 flex items-center justify-center mt-2 mb-3 text-cyan-400 hover:bg-zinc-800 hover:text-cyan-500"
        type="button"
      >
        <i className="fi fi-sr-menu-burger text-xl leading-3"></i>
      </button>
      <nav className="flex flex-col items-center justify-center self-center w-full h-full ">
        <Link
          className="h-10 w-100 text-cyan-400 hover:text-cyan-200 text-xl hover:-translate-y-1 transition-transform"
          to="#"
        >
          <i className="fi fi-sr-house-flood"></i>
        </Link>
        <Link
          className="h-10 w-100 text-cyan-400 hover:text-cyan-200 text-xl hover:-translate-y-1 transition-transform"
          to="#"
        >
          <i className="fi fi-sr-bookmark"></i>
        </Link>
        <Link
          className="h-10 w-100 text-cyan-400 hover:text-cyan-200 text-xl hover:-translate-y-1 transition-transform"
          to="#"
        >
          <i className="fi fi-sr-settings"></i>
        </Link>
        <Link
          className="h-10 w-100 text-cyan-400 hover:text-cyan-200 text-xl hover:-translate-y-1 transition-transform"
          to="#"
        >
          <i className="fi fi-sr-time-past"></i>
        </Link>
      </nav>
    </aside>
  );
}

export default Asidebar;
