import React from "react";
import PropTypes from "prop-types";
import { Marker as LeafletMarker } from "react-leaflet";
import InfoWindow from "./InfoWindow";

const Marker = ({ location }) => {
  const position = [
    parseFloat(location.ChargeDeviceLocation.Latitude),
    parseFloat(location.ChargeDeviceLocation.Longitude)
  ];
  return (
    <LeafletMarker position={position}>
      <InfoWindow location={location} />
    </LeafletMarker>
  );
};

Marker.propTypes = {
  location: PropTypes.shape({
    ChargeDeviceLocation: PropTypes.shape({
      Latitude: PropTypes.string,
      Longitude: PropTypes.string
    })
  })
};

export default Marker;
