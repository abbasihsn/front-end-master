import React from "react";
import { render } from "react-dom";
import SearchParamas from "./SearchParams";
import { Link, Router } from "@reach/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Details from "./Details";

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
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParamas path="/" />
        <Details path="/details/:id" />
      </Router>
      <ToastContainer />
    </div>
  );
};

render(<App />, document.getElementById("root"));
