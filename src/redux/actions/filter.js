import { ADD_FILTER } from "./types";

export const addFilter = filter => ({
  type: ADD_FILTER,
  payload: filter
});
