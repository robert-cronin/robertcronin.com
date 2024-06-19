import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import theme from "@/theme";
import { createGlobalStyle } from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyles = createGlobalStyle`

::-webkit-scrollbar {
  height: 5px;
  width: 5px;
  background: var(--background);
}

::-webkit-scrollbar-thumb {
  background: var(--accent);
  -webkit-border-radius: 1ex;
}

::-webkit-scrollbar-corner {
  background: var(--background);
}

`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
