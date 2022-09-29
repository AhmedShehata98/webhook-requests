import React from "react";
import { NavLink, Outlet, useOutlet } from "react-router-dom";
import { RoutesLinks } from "../utilities/RoutesList";

function ResponsePannel({ children }) {
  return (
    <div className="flex flex-col items-start justify-start min-w-full h-56 overflow-y-hidden overflow-x-auto bg-slate-700">
      {children}
    </div>
  );
}

export default ResponsePannel;
