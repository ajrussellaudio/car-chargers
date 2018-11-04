import {
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE
} from "./types";

export const fetchLocations = () => ({
  type: FETCH_LOCATIONS
});

export const fetchLocationsSuccess = locations => ({
  type: FETCH_LOCATIONS_SUCCESS,
  payload: locations
});

export const fetchLocationsFailure = error => ({
  type: FETCH_LOCATIONS_FAILURE,
  payload: error
});
