import { createSelector } from "reselect";
import { filter as _filter } from "lodash";

export const getAllLocations = state => state.locations.list;
export const getFilter = state => state.filter;

export const getFilteredLocations = createSelector(
  [getAllLocations, getFilter],
  (locations, filter) => _filter(locations, filter)
);
