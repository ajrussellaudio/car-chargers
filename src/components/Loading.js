import React from "react";
import { Notification } from "bloomer";

const Loading = () => (
  <div className="leaflet-container">
    <Notification isColor="info">Loading...</Notification>{" "}
  </div>
);

export default Loading;
