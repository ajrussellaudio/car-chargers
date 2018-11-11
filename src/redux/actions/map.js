import { UPDATE_MAP_BOUNDS } from "./types";

export const updateMapBounds = bounds => ({
  type: UPDATE_MAP_BOUNDS,
  payload: bounds
});
