import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

const GeolocationButton = ({ text, onClick }) => (
  <button
    className="button is-primary"
    disabled={
      !(navigator.geolocation && navigator.geolocation.getCurrentPosition)
    }
    onClick={
      navigator.geolocation
        ? () => navigator.geolocation.getCurrentPosition(onClick)
        : null
    }
  >
    <Icon className="icon" icon={faCrosshairs} /> <span>{text}</span>
  </button>
);

export default GeolocationButton;
