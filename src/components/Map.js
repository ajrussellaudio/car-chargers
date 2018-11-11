import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import { updateMapBounds, moveMap } from "../redux/actions";
import Marker from "./Marker";
import {
  getFilteredLocationsWithinMapBounds,
  getPosition,
  getZoom
} from "../redux/selectors/map";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minZoom: 10,
      defaultPosition: {
        lat: 51.509865,
        lng: -0.118092
      }
    };
    this.handleMove = this.handleMove.bind(this);
  }

  componentDidMount() {
    const mapElement = this.refs.map.leafletElement;
    this.props.moveMap({
      position: this.state.defaultPosition,
      zoom: this.state.minZoom
    });
    this.props.updateMapBounds(mapElement.getBounds());
  }

  handleMove() {
    const mapElement = this.refs.map.leafletElement;
    this.props.updateMapBounds(mapElement.getBounds());
    this.props.moveMap({
      position: mapElement.getCenter(),
      zoom: mapElement.getZoom()
    });
  }

  render() {
    const { position, zoom } = this.props;
    return (
      <LeafletMap
        center={position}
        zoom={zoom}
        minZoom={this.state.minZoom}
        onMoveend={this.handleMove}
        ref="map"
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png "
        />{" "}
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
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  zoom: PropTypes.number,
  updateMapBounds: PropTypes.func
};

const mapStateToProps = state => ({
  locations: getFilteredLocationsWithinMapBounds(state),
  position: getPosition(state),
  zoom: getZoom(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateMapBounds, moveMap }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
