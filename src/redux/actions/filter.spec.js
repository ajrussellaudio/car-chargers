import { ADD_FILTER } from "./types";
import { addFilter } from "./filter";

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
});
