import React from "react";
import { forwardRef } from "react";
import { NavLink, Outlet, useOutlet } from "react-router-dom";
import { RoutesLinks } from "../utilities/RoutesList";

const ResponsePannel = forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-start justify-start min-w-full h-56 my-2 mb-2 overflow-y-hidden overflow-x-auto rounded-md  bg-gray-700 "
    >
      {children}
    </div>
  );
});

export default ResponsePannel;
