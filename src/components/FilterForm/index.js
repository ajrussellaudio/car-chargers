import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addFilter } from "../../redux/actions";
import Checkbox from "./Checkbox";

const FilterForm = props => (
  <React.Fragment>
    <Checkbox {...props} key="Accessible24Hours" text="Has 24 hour access?" />
  </React.Fragment>
);

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addFilter }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
