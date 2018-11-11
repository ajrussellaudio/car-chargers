import mapReducer from "./map";
import { updateMapBounds } from "../actions";

describe("mapReducer", () => {
  let state;

  beforeEach(() => {
    state = mapReducer(undefined, {});
  });

  it("initial state should have empty bounds object", () => {
    const expectedState = { bounds: {} };
    expect(state).toEqual(expectedState);
  });

  it("should update state with new map bounds", () => {
    const dummyMapBounds = {
      _northEast: { lat: 0, lng: 0 },
      _southWest: { lat: 0, lng: 0 }
    };
    const expectedState = {
      bounds: {
        _northEast: { lat: 0, lng: 0 },
        _southWest: { lat: 0, lng: 0 }
      }
    };
    const action = updateMapBounds(dummyMapBounds);
    state = mapReducer(state, action);
    expect(state).toEqual(expectedState);
  });
});
