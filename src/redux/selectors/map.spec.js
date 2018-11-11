import { getMapBounds, getFilteredLocationsWithinMapBounds } from "./map";

describe("getMapBounds", () => {
  it("gets the map bounds held in state", () => {
    const dummyMapBounds = {
      _northEast: { lat: 1, lng: 1 },
      _southWest: { lat: -1, lng: -1 }
    };
    const state = {
      map: { bounds: dummyMapBounds }
    };
    expect(getMapBounds(state)).toEqual(dummyMapBounds);
  });
});

describe("getFilteredLocationsWithinMapBounds", () => {
  it("gets filtered locations positioned with the bounds of the map view", () => {
    const dummyLocations = [
      { ChargeDeviceLocation: { Latitude: 0, Longitude: 0 } },
      { ChargeDeviceLocation: { Latitude: 2, Longitude: 0 } },
      { ChargeDeviceLocation: { Latitude: 0, Longitude: -2 } }
    ];
    const dummyMapBounds = {
      _northEast: { lat: 1, lng: 1 },
      _southWest: { lat: -1, lng: -1 }
    };
    const state = {
      locations: { list: dummyLocations },
      map: { bounds: dummyMapBounds }
    };
    expect(getFilteredLocationsWithinMapBounds(state).length).toBe(1);
  });
});
