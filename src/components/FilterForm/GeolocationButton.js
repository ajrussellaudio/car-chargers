import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

const GeolocationButton = ({ text, onClick }) => (
  <div className="field">
    <div className="control">
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
    </div>
  </div>
);

export default GeolocationButton;
