import CreateAccount from "@pages/CreateAccount";
import Login from "@pages/Login";
import ListTraveler from "@components/ListTraveler";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UserProvider } from "./store/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/travelerlist" element={<ListTraveler />} />
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>
);
