import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";

// Chakra theme override — light neobrutalism
const chakraTheme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  styles: { global: { body: { bg: "transparent", color: "#000000" } } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
