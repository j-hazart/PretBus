import React from "react";
import Leaflet from "../components/map";
import Header from "../components/Header";
import "../App.css";

function MapDriver() {
  return (
    <>
      <Header />
      <Leaflet />
    </>
  );
}
export default MapDriver;
