import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RoutesLinks } from "../utilities/RoutesList";

function ResponseOptionsTabs() {
  return (
    <div className="flex w-full bg-zinc-600">
      <NavLink
        to={RoutesLinks.bodyResponse}
        className="px-5 py-1 mb-1 font-semibold capitalize  hover:text-emerald-400 "
      >
        body
      </NavLink>
      <NavLink
        to={RoutesLinks.cookiesResponse}
        className="px-5 py-1 mb-1 font-semibold capitalize  hover:text-emerald-400 "
      >
        cookies
      </NavLink>
      <NavLink
        to={RoutesLinks.headersResponse}
        className="px-5 py-1 mb-1 font-semibold capitalize  hover:text-emerald-400 "
      >
        headers
      </NavLink>
    </div>
  );
}

export default ResponseOptionsTabs;
