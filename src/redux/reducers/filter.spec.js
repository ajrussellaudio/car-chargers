import filterReducer from "./filter";
import { addFilter, removeFilter } from "../actions";

describe("filter reducer", () => {
  let state;

  beforeEach(() => {
    state = filterReducer(undefined, {});
  });

  it("initial state should be empty object", () => {
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });

  it("adding filter should update state", () => {
    const newFilter = { isAwesome: true };
    const expectedState = { isAwesome: true };
    const action = addFilter(newFilter);
    state = filterReducer(state, action);
    expect(state).toEqual(expectedState);
  });

  it("removing filter should update state", () => {
    state = filterReducer(state, addFilter({ isAwesome: true }));
    const action = removeFilter("isAwesome");
    const expectedState = {};
    state = filterReducer(state, action);
    expect(state).toEqual(expectedState);
  });

  it("adding two and removing one should leave the other one", () => {
    state = filterReducer(state, addFilter({ isAwesome: true }));
    state = filterReducer(state, addFilter({ name: "Alan" }));
    const action = removeFilter("isAwesome");
    const expectedState = { name: "Alan" };
    state = filterReducer(state, action);
    expect(state).toEqual(expectedState);
  });
});
