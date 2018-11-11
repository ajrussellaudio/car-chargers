import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchLocations } from "../redux/actions";

import Map from "./Map";
import Loading from "./Loading";
import Error from "./Error";
import FilterForm from "./FilterForm";

export class App extends Component {
  constructor(props) {
    super(props);
    this.handleNavbarBurgerToggle = this.handleNavbarBurgerToggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchLocations();
  }

  handleNavbarBurgerToggle() {
    this.setState(prevState => ({
      navbarBurgerOpen: !prevState.navbarBurgerOpen
    }));
  }

  render() {
    const {
      locations: { isLoading, error }
    } = this.props;

    return (
      <div className="tile is-ancestor is-full-width">
        <div className="tile is-parent is-9">
          <article className="tile is-child">
            {isLoading && <Loading />}
            {!isLoading && !error && <Map />}
            {error && <Error message={error} />}
          </article>
        </div>
        <div className="tile is-parent is-3">
          <div className="tile is-child">
            <FilterForm />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  locations: PropTypes.shape({
    list: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.string
  }),
  fetchLocations: PropTypes.func
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchLocations }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
