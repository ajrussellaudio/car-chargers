import { getAllLocations, getFilteredLocations } from "./locations";

describe("getAllLocations", () => {
  it("returns array of all locations from state", () => {
    const dummyLocations = [1, 2, 3];
    const state = { locations: { list: dummyLocations } };
    expect(getAllLocations(state)).toEqual(dummyLocations);
  });
});

describe("getLocations", () => {
  it("returns array of locations which match boolean filter", () => {
    const dummyLocations = [
      { Accessible24Hours: true },
      { Accessible24Hours: false },
      { Accessible24Hours: true }
    ];
    const state = {
      locations: { list: dummyLocations },
      filter: { Accessible24Hours: true }
    };
    expect(getFilteredLocations(state).length).toBe(2);
  });

  it("returns array of locations which include a connection type", () => {
    const SPROCKET = "SPROCKET";
    const WIDGET = "WIDGET";
    const dummyLocations = [
      { Connector: [{ ConnectorType: SPROCKET }] },
      { Connector: [{ ConnectorType: WIDGET }] },
      { Connector: [{ ConnectorType: SPROCKET }, { ConnectorType: WIDGET }] }
    ];
    const state = {
      locations: { list: dummyLocations },
      filter: { Connector: [{ ConnectorType: SPROCKET }] }
    };
    expect(getFilteredLocations(state).length).toBe(2);
  });
});
