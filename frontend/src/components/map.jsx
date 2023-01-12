import { MapContainer, TileLayer } from "react-leaflet";

function Leaflet() {
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
    </MapContainer>
  );
}

export default Leaflet;
