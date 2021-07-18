import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer,
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? typeof window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
