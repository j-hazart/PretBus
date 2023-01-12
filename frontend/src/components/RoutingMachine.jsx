import * as L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(49.252365860844456, 4.0328224585798385),
      L.latLng(49.692929676661734, 4.013381227475516),
      L.latLng(49.7024173726248, 4.934932529136948),
      L.latLng(49.51175903401996, 5.37294681433389),
      L.latLng(49.42396684243178, 4.953974901941083),
      L.latLng(48.63779837202115, 4.9494751772282894),
    ],
    createMarker() {
      return null;
    },

    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
    },
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
