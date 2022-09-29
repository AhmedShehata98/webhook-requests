import React from "react";
import ReactDOM from "react-dom/client";

// styles
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
// remember to add React.StrictMode in production build
