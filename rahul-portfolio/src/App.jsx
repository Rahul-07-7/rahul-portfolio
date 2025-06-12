import React from "react";
import Sidebar from "./component/Sidebar";
import Home from "./component/Home";
import About from "./component/About";
import Resume from "./component/Resume";
import "./index.css";
import Portfolio from "./component/Portfolio";
import Contect from "./component/Contect";

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contect />
      </div>
    </div>
  );
}

export default App;
