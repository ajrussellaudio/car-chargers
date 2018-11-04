import React from "react";
import { Box } from "react-bulma-components/full";

const Map = ({ locations }) => (
  <Box>
    <ul>
      {locations.map(({ ChargeDeviceId, ChargeDeviceName }) => (
        <li key={ChargeDeviceId}>{ChargeDeviceName}</li>
      ))}
    </ul>
  </Box>
);

export default Map;
