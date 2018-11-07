import { ADD_FILTER, REMOVE_FILTER } from "./types";

export const addFilter = filter => ({
  type: ADD_FILTER,
  payload: filter
});

export const removeFilter = filterKey => ({
  type: REMOVE_FILTER,
  payload: filterKey
});
