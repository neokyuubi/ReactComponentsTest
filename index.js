import React from "react";
import ReactDOM from "react-dom";

const html = 
(
  <>
    <img src="./react-logo.png" width={'100px'}/>
    <h1>Func facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Neokyuubi is starting to use it</li>
    </ul>
  </>
);

ReactDOM.render(html, document.getElementById("root"));