import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchLocations } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }
  render() {
    const {
      locations: { list, isLoading, error }
    } = this.props;

    const devicesList = devices => (
      <ul>
        {devices.map(({ ChargeDeviceId, ChargeDeviceName }) => (
          <li key={ChargeDeviceId}>{ChargeDeviceName}</li>
        ))}
      </ul>
    );

    return (
      <div className="App">
        <h1>Electric Vehicle Charging Locations</h1>
        {isLoading && <h3>Loading...</h3>}
        {!isLoading && !error && devicesList(list)}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchLocations }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
