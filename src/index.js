import React from "react";
import ReactDOM from "react-dom";
import Drawer from "./Drawer.js";
import "./styles.css";

function App() {
  return (
    <div className="App" style={{backgroundColor:"gray"}}>
      <Drawer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);