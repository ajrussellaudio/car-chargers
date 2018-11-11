import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

const GeolocationButton = ({ text, onClick }) => (
  <button
    disabled={
      !(navigator.geolocation && navigator.geolocation.getCurrentPosition)
    }
    onClick={
      navigator.geolocation
        ? () => navigator.geolocation.getCurrentPosition(onClick)
        : null
    }
  >
    <Icon icon={faCrosshairs} /> {text}
  </button>
);

export default GeolocationButton;
