import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RoutesLinks } from "../utilities/RoutesList";

function ResponseOptionsTabs() {
  return (
    <div className="flex divide-x w-full bg-zinc-600">
      <NavLink
        to={RoutesLinks.bodyResponse}
        className="bg-slate-400 px-5 py-1 border border-b-0 border-slate-500 hover:bg-slate-700 "
      >
        body
      </NavLink>
      <NavLink
        to={RoutesLinks.cookiesResponse}
        className="bg-slate-400 px-5 py-1 border border-b-0 border-slate-500 hover:bg-slate-700 "
      >
        cookies
      </NavLink>
      <NavLink
        to={RoutesLinks.headersResponse}
        className="bg-slate-400 px-5 py-1 border border-b-0 border-slate-500 hover:bg-slate-700 "
      >
        headers
      </NavLink>
    </div>
  );
}

export default ResponseOptionsTabs;
