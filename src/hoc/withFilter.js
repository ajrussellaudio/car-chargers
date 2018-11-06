import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { filter as _filter } from "lodash";

export const withFilter = Component => props => {
  const { locations, filter = {} } = props;
  return <Component {...props} locations={_filter(locations, filter)} />;
};

const mapStateToProps = state => ({
  locations: state.locations.list,
  filter: state.filter
});

export default compose(
  connect(mapStateToProps),
  withFilter
);
