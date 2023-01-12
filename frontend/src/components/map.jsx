import { MapContainer, TileLayer, Marker } from "react-leaflet";
import * as L from "leaflet";
import RoutingMachine from "./RoutingMachine";

function Leaflet() {
  const points = {
    depart: [
      [49.252365860844456, 4.0328224585798385],
      [49.692929676661734, 4.013381227475516],
      [49.51175903401996, 5.37294681433389],
    ],
    arriver: [
      [49.7024173726248, 4.934932529136948],
      [49.42396684243178, 4.953974901941083],
      [48.63779837202115, 4.9494751772282894],
    ],
  };

  function createMarker(type) {
    if (type === "depart") {
      return new L.Icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png`,
      });
    }
    return new L.Icon({
      iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png`,
    });
  }

  return (
    <MapContainer
      center={[49.25826476151679, 4.030767769714578]}
      zoom={12}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RoutingMachine />
      {points.arriver.map((point) => (
        <Marker position={point} icon={createMarker("arriver")} />
      ))}
      {points.depart.map((point) => (
        <Marker position={point} icon={createMarker("depart")} />
      ))}
    </MapContainer>
  );
}

export default Leaflet;
