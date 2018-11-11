import { getFilter } from "./filter";

describe("getFilter", () => {
  it("returns object represnting filter in state", () => {
    const dummyFilter = { isAwesome: true };
    const state = { filter: dummyFilter };
    expect(getFilter(state)).toEqual(dummyFilter);
  });
});
