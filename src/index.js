import React from "react";
import ReactDOM from "react-dom/client";
import { ToastProvider } from "react-toast-notifications";
import "./Styles/index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root rendering 
root.render(
  <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-left">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ToastProvider>
);
