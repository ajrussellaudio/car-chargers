import React from "react";
import PropTypes from "prop-types";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import Marker from "./Marker";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 55.8642,
      lng: -4.2518,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.props.locations.map(location => (
          <Marker key={location.ChargeDeviceId} location={location} />
        ))}
      </LeafletMap>
    );
  }
}

Map.propTypes = {
  locations: PropTypes.array
};

export default Map;