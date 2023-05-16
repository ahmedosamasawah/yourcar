import "./index.css";
import App from "./App";
import React from "react";
import store from "./Store/CartSlice";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
