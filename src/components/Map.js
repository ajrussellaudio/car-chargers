import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import { updateMapBounds } from "../redux/actions";
import Marker from "./Marker";
import { getFilteredLocationsWithinMapBounds } from "../redux/selectors/map";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 55.8642,
      lng: -4.2518,
      zoom: 11
    };
    this.handleMove = this.handleMove.bind(this);
  }

  componentDidMount() {
    this.handleMove();
  }

  handleMove() {
    const bounds = this.refs.map.leafletElement.getBounds();
    this.props.updateMapBounds(bounds);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    console.log(this.props.locations.length);

    return (
      <LeafletMap
        center={position}
        zoom={this.state.zoom}
        onMoveend={() => this.handleMove(this)}
        ref="map"
      >
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
  locations: PropTypes.array,
  updateMapBounds: PropTypes.func
};

const mapStateToProps = state => ({
  locations: getFilteredLocationsWithinMapBounds(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateMapBounds }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
