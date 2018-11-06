import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addFilter } from "../redux/actions";

const FilterForm = ({ addFilter }) => (
  <React.Fragment>
    <label htmlFor="accessible-24-hours">Accessible 24 Hours:</label>
    <input
      type="checkbox"
      id="accessible-24-hours"
      onChange={event => addFilter({ Accessible24Hours: event.target.checked })}
    />
  </React.Fragment>
);

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addFilter }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
