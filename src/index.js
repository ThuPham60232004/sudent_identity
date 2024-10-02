import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ItemProvider } from './context/ItemContext';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <AuthContextProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
