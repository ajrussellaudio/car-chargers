# Car Chargers :car: :zap:

This app displays a map of all the electric car charging stations in the UK.

Data is provided by Data.GOV, specifically the [National Charge Point Registry](https://data.gov.uk/dataset/1ce239a6-d720-4305-ab52-17793fedfac3/national-charge-point-registry). Charge locations are displayed on a map, clustered in areas with multiple charge points. Clicking a cluster will zoom the map to its location. Clicking a single map marker will display details of that charging location:

- the name
- street address and postcode
- whether or not the location can be accessed 24 hours
- payment details for the charging location
- types of connector available at the location

The data on the map can be filtered:

- by 24 hour access
- by physical access restrictions
- by subscription requirement
- by available connector types

## Installation

To install, clone this repo, or download and unzip. `cd` into the directory and:

```bash
npm install
```

```bash
npm start
```

This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and uses the built in Webpack Dev Server to run locally.

### Running tests

This app is fully tested. To run the test suites:

```bash
npm test
```

## Technology Stack

- [React](https://reactjs.org/) - Everyone's favourite UI library
- [Redux](https://redux.js.org/) - Everyone's favourite UI state management library
- [Reselect](https://github.com/reduxjs/reselect) - Composable, testable selector library for accessing stuff in state
- [redux-observable](https://redux-observable.js.org/) - Allows you to attach [RxJS](https://rxjs-dev.firebaseapp.com/) Operators to your Redux actions. It's like redux-thunk on steroids
- [React-Leaflet](https://react-leaflet.js.org/) - Component library for [Leaflet](https://leafletjs.com/) maps in React
- - [react-leaflet-markercluster](https://www.npmjs.com/package/react-leaflet-markercluster) - For dead simple cluster rendering
- [Bulma](https://bulma.io/) - CSS framework. It's like Bootstrap but it doesn't suck.
- [Font Awesome](https://fontawesome.com/) - For awesome icons
- [Jest](https://jestjs.io/) - Testing framework
- [Enzyme](https://github.com/airbnb/enzyme) - Shallow test renderer for React (and more...)
