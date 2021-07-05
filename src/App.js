import React from "react";
import { render } from "react-dom";
import SearchParamas from "./SearchParams";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const notify = () => toast("Wow so easy!");
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
      <ToastContainer />
    </div>
  );
};

render(<App />, document.getElementById("root"));
