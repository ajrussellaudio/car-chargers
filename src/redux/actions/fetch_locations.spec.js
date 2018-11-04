import {
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE
} from "./types";
import {
  fetchLocations,
  fetchLocationsSuccess,
  fetchLocationsFailure
} from "./fetch_locations";

describe("FETCH_LOCATIONS actions", () => {
  describe("fetchLocations", () => {
    it("should create an action to fetch the locations", () => {
      const expectedAction = {
        type: FETCH_LOCATIONS
      };
      expect(fetchLocations()).toEqual(expectedAction);
    });
  });

  describe("fetchLocationsSuccess", () => {
    it("should create an action with locations as payload", () => {
      const locations = [];
      const expectedAction = {
        type: FETCH_LOCATIONS_SUCCESS,
        payload: locations
      };
      expect(fetchLocationsSuccess(locations)).toEqual(expectedAction);
    });
  });

  describe("fetchLocationsFailure", () => {
    it("should create an action with error as payload", () => {
      const error = "uh-oh, Spaghetti-O's!";
      const expectedAction = {
        type: FETCH_LOCATIONS_FAILURE,
        payload: error
      };
      expect(fetchLocationsFailure(error)).toEqual(expectedAction);
    });
  });
});
