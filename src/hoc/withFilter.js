import React from "react";
import { connect } from "react-redux";
import { filter as _filter } from "lodash";

export const withFilter = Component => props => {
  const { locations, filter = {} } = props;
  return <Component {...props} locations={_filter(locations, filter)} />;
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(withFilter);
