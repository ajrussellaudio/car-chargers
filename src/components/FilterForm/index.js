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
    <div className="field">
      <div className="control">
        <Checkbox
          {...props}
          filterKey="Accessible24Hours"
          text="Has 24 hour access?"
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <Checkbox
          {...props}
          inverse
          filterKey="AccessRestrictionFlag"
          text="No access restrictions?"
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <Checkbox
          {...props}
          inverse
          filterKey="SubscriptionRequiredFlag"
          text="No subscription required?"
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <div className="select">
          <Select
            {...props}
            parentKey="Connector"
            filterKey="ConnectorType"
            data={props.connectors.sort()}
          />
        </div>
      </div>
    </div>
    <div className="field">
      <div className="control">
        <GeolocationButton
          text="Move to my location"
          onClick={geoLoc => props.moveMap(geoLocToMapPosition(geoLoc))}
        />
      </div>
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
