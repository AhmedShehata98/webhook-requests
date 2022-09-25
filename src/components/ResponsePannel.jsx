import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RoutesLinks } from "../utilities/RoutesList";

function ResponsePannel() {
  return (
    <div className="flex flex-col items-start justify-start ">
      <h5 className="mt-2 mb-1 font-sans uppercase ">response </h5>
      <div className="flex divide-x bg-slate-700">
        <NavLink
          to={"response" + "/" + RoutesLinks.bodyResponse}
          className="bg-slate-400 px-5 py-1 hover:"
        >
          body
        </NavLink>
        <NavLink
          to={"response" + "/" + RoutesLinks.cookiesResponse}
          className="bg-slate-400 px-5 py-1 hover:"
        >
          cookies
        </NavLink>
        <NavLink
          to={"response" + "/" + RoutesLinks.headersResponse}
          className="bg-slate-400 px-5 py-1 hover:"
        >
          headers
        </NavLink>
      </div>
      <code className="min-w-full h-40 bg-slate-700">
        <Outlet />
      </code>
    </div>
  );
}

export default ResponsePannel;
