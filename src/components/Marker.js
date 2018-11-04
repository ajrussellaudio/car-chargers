import React from "react";
import { Marker as LeafletMarker } from "react-leaflet";
import InfoWindow from "./InfoWindow";

const Marker = ({ location }) => {
  const position = [
    location.ChargeDeviceLocation.Latitude,
    location.ChargeDeviceLocation.Longitude
  ];
  return (
    <LeafletMarker position={position}>
      <InfoWindow location={location} />
    </LeafletMarker>
  );
};

export default Marker;
