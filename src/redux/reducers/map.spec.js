import mapReducer from "./map";
import { updateMapBounds, moveMap } from "../actions";

describe("mapReducer", () => {
  let state;

  beforeEach(() => {
    state = mapReducer(undefined, {});
  });

  it("initial state should have empty bounds object, zeroed lat, lng and zoom values", () => {
    const expectedState = { bounds: {}, position: { lat: 0, lng: 0 }, zoom: 0 };
    expect(state).toEqual(expectedState);
  });

  it("should update state with new map bounds", () => {
    const dummyMapBounds = {
      _northEast: { lat: 0, lng: 0 },
      _southWest: { lat: 0, lng: 0 }
    };
    const expectedState = {
      ...state,
      bounds: {
        _northEast: { lat: 0, lng: 0 },
        _southWest: { lat: 0, lng: 0 }
      }
    };
    const action = updateMapBounds(dummyMapBounds);
    state = mapReducer(state, action);
    expect(state).toEqual(expectedState);
  });

  it("should update position and zoom when map is moved", () => {
    const destination = { position: { lat: 20, lng: 20 }, zoom: 10 };
    const expectedState = {
      ...state,
      position: { lat: 20, lng: 20 },
      zoom: 10
    };
    const action = moveMap(destination);
    state = mapReducer(state, action);
    expect(state).toEqual(expectedState);
  });
});
