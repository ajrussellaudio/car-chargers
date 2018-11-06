import filterReducer from "./filter";
import { addFilter } from "../actions";

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
});
