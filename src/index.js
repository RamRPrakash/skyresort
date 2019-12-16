import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Home/view/Home";
import Paper from "@material-ui/core/Paper";
import "./styles.css";

function App() {
  return (
    <Paper
      style={{ height: document.documentElement.clientHeight, margin: "5%" }}
    >
      <Home />
    </Paper>
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
