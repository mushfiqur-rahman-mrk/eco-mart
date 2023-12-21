import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Authentication from "./Authentication/Authentication.jsx";
const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: "#00B207",
      light: "#84D187",
      dark: "##2C742F",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Authentication>
        <RouterProvider router={Router} />
        </Authentication>
        <ToastContainer />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
