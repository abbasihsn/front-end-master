import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));
const SearchParamas = lazy(() => import("./SearchParams"));

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
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Suspense fallback={<h1>loading route ...</h1>}>
          <Router>
            <SearchParamas path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
        <ToastContainer />
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
