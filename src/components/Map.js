import React from "react";
import { Box } from "react-bulma-components/full";
import { Map, TileLayer } from "react-leaflet";
import Marker from "./Marker";

class LeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 55.8642,
      lng: -4.2518,
      zoom: 13
    };
  }

  render() {
    console.log(
      this.props.locations.filter(({ ChargeDeviceName }) =>
        ChargeDeviceName.includes("IKEA")
      )
    );

    const position = [this.state.lat, this.state.lng];
    return (
      <Box>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.locations.map(location => (
            <Marker key={location.ChargeDeviceId} location={location} />
          ))}
        </Map>
      </Box>
    );
  }
}

export default LeafletMap;
