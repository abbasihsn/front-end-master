import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "sth-important" }, [
    // can be array or one simple element!
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "magoul",
      animal: "hamster",
      breed: "robofski",
    }),
    React.createElement(Pet, {
      name: "magoul",
      animal: "hamster",
      breed: "robofski",
    }),
    React.createElement(Pet, {
      name: "magoul",
      animal: "hamster",
      breed: "robofski",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));