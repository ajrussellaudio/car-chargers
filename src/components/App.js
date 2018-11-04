import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchLocations } from "../redux/actions";
import {
  Columns,
  Section,
  Container,
  Heading
} from "react-bulma-components/full";
import Map from "./Map";
import Loading from "./Loading";
import FilterForm from "./FilterForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }
  render() {
    const {
      locations: { list, isLoading, error }
    } = this.props;

    return (
      <div className="App">
        {/* <h1>Electric Vehicle Charging Locations</h1>
        {isLoading && <h3>Loading...</h3>}
        {!isLoading && !error && <Map locations={list} />}
        {error && <h3>{error}</h3>} */}
        <Columns>
          <Columns.Column size="three-quarters">
            <Section>
              <Container fluid>
                <Heading>Map</Heading>
                {isLoading && <Loading />}
                {!isLoading && !error && <Map locations={list} />}
                {error && <h3>{error}</h3>}
              </Container>
            </Section>
          </Columns.Column>
          <Columns.Column>
            <Section>
              <Container fluid>
                <FilterForm />
              </Container>
            </Section>
          </Columns.Column>
        </Columns>
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
