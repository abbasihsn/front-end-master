import React from "react";
import { render } from "react-dom";
import SearchParamas from "./SearchParams";

const App = () => {
  // return React.createElement("div", { id: "sth-important" }, [
  //   // can be array or one simple element!
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "magoul",
  //     animal: "hamster",
  //     breed: "robofski",
  //   }),
  //   React.createElement(Pet, {
  //     name: "magoul",
  //     animal: "hamster",
  //     breed: "robofski",
  //   }),
  //   React.createElement(Pet, {
  //     name: "magoul",
  //     animal: "hamster",
  //     breed: "robofski",
  //   }),
  // ]);
  return (
    <div id="sth-important">
      <h1>Adopt Me!</h1>
      <SearchParamas />
    </div>
  );
};

render(<App />, document.getElementById("root"));
