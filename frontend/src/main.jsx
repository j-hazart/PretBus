import CreateAccount from "@pages/CreateAccount";
import Login from "@pages/Login";
import MapDriver from "@pages/MapDriver";
import ListTraveler from "@components/ListTraveler";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UserProvider } from "./store/auth";
import TripReservation from "./pages/TripReservation";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/map" element={<MapDriver />} />
          <Route path="/travelerlist" element={<ListTraveler />} />
          <Route path="/reservation" element={<TripReservation />} />
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>
);
