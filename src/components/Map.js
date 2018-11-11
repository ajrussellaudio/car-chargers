import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import { getFilteredLocations } from "../redux/selectors";
import Marker from "./Marker";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 55.8642,
      lng: -4.2518,
      zoom: 11
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {this.props.locations.map(location => (
            <Marker key={location.ChargeDeviceId} location={location} />
          ))}
        </MarkerClusterGroup>
      </LeafletMap>
    );
  }
}

Map.propTypes = {
  locations: PropTypes.array
};

const mapStateToProps = state => ({
  locations: getFilteredLocations(state)
});

export default connect(mapStateToProps)(Map);
