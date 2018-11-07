import { ADD_FILTER, REMOVE_FILTER } from "./types";
import { addFilter, removeFilter } from "./filter";

describe("FILTER actions", () => {
  describe("addFilter", () => {
    it("should create an action to add a filter", () => {
      const newFilter = { isAwesome: true };
      const expectedAction = {
        type: ADD_FILTER,
        payload: newFilter
      };
      expect(addFilter(newFilter)).toEqual(expectedAction);
    });
  });

  describe("removeFilter", () => {
    const filterToRemove = "isAwesome";
    const expectedAction = {
      type: REMOVE_FILTER,
      payload: filterToRemove
    };
    expect(removeFilter(filterToRemove)).toEqual(expectedAction);
  });
});
