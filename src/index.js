import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store1 } from "./data/store";

const container = document.getElementById("root");
// @ts-ignore
const root = createRoot(container);
root.render(
  <Provider store={store1}>
    <App />
  </Provider>
);
