import React from "react";
import ReactDOM from "react-dom";

const name = "Aniket";
const num = 31;
ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <h6>Your Lucky number is {num}</h6>
  </div>,
  document.getElementById("root")
);
