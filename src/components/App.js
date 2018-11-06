import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Tile } from "bloomer";

import { fetchLocations } from "../redux/actions";

import Map from "./Map";
import Loading from "./Loading";
import Error from "./Error";
import FilterForm from "./FilterForm";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarBurgerOpen: false
    };
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
      locations: { list, isLoading, error }
    } = this.props;

    return (
      <div className="App">
        <Tile isAncestor>
          <Tile isParent isVertical isSize={8}>
            <Tile isChild>
              {isLoading && <Loading />}
              {!isLoading && !error && <Map locations={list} />}
              {error && <Error message={error} />}
            </Tile>
          </Tile>
          <Tile isParent isVertical isSize={8}>
            <Tile isChild>
              <FilterForm />
            </Tile>
          </Tile>
        </Tile>
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
