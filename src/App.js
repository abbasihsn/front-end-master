import React, { useState } from "react";
import { render } from "react-dom";
import SearchParamas from "./SearchParams";
import { Link, Router } from "@reach/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";

const App = () => {
  const themeHook = useState("peru");
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
    <ThemeContext.Provider value={themeHook}>
      <div id="sth-important">
        <Navbar />
        <Router>
          <SearchParamas path="/" />
          <Details path="/details/:id" />
        </Router>
        <ToastContainer />
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
