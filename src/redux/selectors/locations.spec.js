import { getAllLocations, getFilter, getFilteredLocations } from "./locations";

describe("getAllLocations", () => {
  it("returns array of all locations from state", () => {
    const dummyLocations = [1, 2, 3];
    const state = { locations: { list: dummyLocations } };
    expect(getAllLocations(state)).toEqual(dummyLocations);
  });
});

describe("getLocations", () => {
  it("returns array of locations which match filter", () => {
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
});
