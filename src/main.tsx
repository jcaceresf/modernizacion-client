import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CurrentUserContextProvider } from "./contexts/currentUserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <CurrentUserContextProvider>
          <App />
        </CurrentUserContextProvider>
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
