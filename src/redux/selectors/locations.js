import { createSelector } from "reselect";
import { filter as _filter } from "lodash";

import { getFilter } from "./filter";

export const getAllLocations = state => state.locations.list;

export const getFilteredLocations = createSelector(
  [getAllLocations, getFilter],
  (locations, filter) => _filter(locations, filter)
);
