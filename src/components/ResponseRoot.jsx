import React from "react";
import { Outlet } from "react-router-dom";

function ResponseRoot() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default ResponseRoot;
