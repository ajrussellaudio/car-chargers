import { UPDATE_MAP_BOUNDS, MOVE_MAP } from "./types";
import { updateMapBounds, moveMap } from "./map";

describe("updateMapBounds", () => {
  it("returns an action to update the map bounds", () => {
    const dummyMapBounds = {
      _northEast: { lat: 0, lng: 0 },
      _southWest: { lat: 0, lng: 0 }
    };
    const expectedAction = { type: UPDATE_MAP_BOUNDS, payload: dummyMapBounds };
    expect(updateMapBounds(dummyMapBounds)).toEqual(expectedAction);
  });
});

describe("moveMap", () => {
  it("returns an action to update the position and zoom in state", () => {
    const dummyMapLocation = {
      position: {
        lat: 0,
        lng: 0
      },
      zoom: 10
    };
    const expectedAction = { type: MOVE_MAP, payload: dummyMapLocation };
    expect(moveMap(dummyMapLocation)).toEqual(expectedAction);
  });
});
