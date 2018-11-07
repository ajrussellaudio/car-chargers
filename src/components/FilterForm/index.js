import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addFilter, removeFilter } from "../../redux/actions";
import Checkbox from "./Checkbox";

const FilterForm = props => (
  <React.Fragment>
    <Checkbox
      {...props}
      filterKey="Accessible24Hours"
      text="Has 24 hour access?"
    />
    <Checkbox
      {...props}
      inverse
      filterKey="AccessRestrictionFlag"
      text="No access resctrictions?"
    />
    <Checkbox
      {...props}
      inverse
      filterKey="SubscriptionRequiredFlag"
      text="No subscription required?"
    />
  </React.Fragment>
);

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addFilter, removeFilter }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
