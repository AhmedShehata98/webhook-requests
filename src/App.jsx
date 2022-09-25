import React from "react";
import Headerbar from "./Layout/Headerbar/Headerbar";
import "./app.css";
import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <main>
      <Headerbar />
      <Router>
        <Routes />
      </Router>
    </main>
  );
}

export default App;
