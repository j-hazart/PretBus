import CreateAccount from "@components/CreateAccount";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UserProvider } from "./store/auth";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>
);
