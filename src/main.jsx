import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Video_context from "./Context/Video_context.jsx";
import AuthProvider, { AuthContext } from "./Context/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Video_context>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Video_context>
    </AuthProvider>
  </React.StrictMode>
);
