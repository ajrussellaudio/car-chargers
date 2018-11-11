import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Checkbox from "./Checkbox";
import Select from "./Select";
import { addFilter, removeFilter, moveMap } from "../../redux/actions";
import { getConnectorNames } from "../../redux/selectors/connectors";
import GeolocationButton from "./GeolocationButton";

const geoLocToMapPosition = geoLoc => ({
  position: {
    lat: geoLoc.coords.latitude,
    lng: geoLoc.coords.longitude
  },
  zoom: 14
});

const FilterForm = props => (
  <section className="section">
    <div className="container is-tablet">
      <Checkbox
        {...props}
        filterKey="Accessible24Hours"
        text="Has 24 hour access?"
      />
      <Checkbox
        {...props}
        inverse
        filterKey="AccessRestrictionFlag"
        text="No access restrictions?"
      />
      <Checkbox
        {...props}
        inverse
        filterKey="SubscriptionRequiredFlag"
        text="No subscription required?"
      />
      <Select
        {...props}
        parentKey="Connector"
        filterKey="ConnectorType"
        data={props.connectors.sort()}
      />
      <GeolocationButton
        text="Move to my location"
        onClick={geoLoc => props.moveMap(geoLocToMapPosition(geoLoc))}
      />
    </div>
  </section>
);

const mapStateToProps = state => ({
  ...state,
  connectors: getConnectorNames(state)
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addFilter, removeFilter, moveMap }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
