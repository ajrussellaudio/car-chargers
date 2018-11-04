import locationsReducer from "./locations";
import {
  fetchLocations,
  fetchLocationsSuccess,
  fetchLocationsFailure
} from "../actions";

describe("locations reducer", () => {
  let state;

  beforeEach(() => {
    state = locationsReducer(undefined, {});
  });

  it("initial state should be empty, not loading, no error", () => {
    const expectedState = {
      list: [],
      isLoading: false,
      error: null
    };
    expect(state).toEqual(expectedState);
  });

  it("fetching locations sets isLoading to true", () => {
    const expectedState = {
      list: [],
      isLoading: true,
      error: null
    };
    const action = fetchLocations();
    state = locationsReducer(state, action);
    expect(state).toEqual(expectedState);
  });

  it("fetching success sets list to array and isLoading to false", () => {
    const result = ["LOCATION_1", "LOCATION_2"];
    const expectedState = {
      list: result,
      isLoading: false,
      error: null
    };
    const action = fetchLocationsSuccess(result);
    state = locationsReducer(state, action);
    expect(state).toEqual(expectedState);
  });

  it("fetching failure should produce error set isLoading to false", () => {
    const error = "Cannot open pod bay doors.";
    const expectedState = {
      list: [],
      isLoading: false,
      error
    };
    const action = fetchLocationsFailure(error);
    state = locationsReducer(state, action);
    expect(state).toEqual(expectedState);
  });
});
