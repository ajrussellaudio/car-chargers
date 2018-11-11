import { UPDATE_MAP_BOUNDS } from "./types";
import { updateMapBounds } from "./map";

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
