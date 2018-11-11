import { UPDATE_MAP_BOUNDS, MOVE_MAP } from "./types";

export const updateMapBounds = bounds => ({
  type: UPDATE_MAP_BOUNDS,
  payload: bounds
});

export const moveMap = ({ position, zoom }) => ({
  type: MOVE_MAP,
  payload: { position, zoom }
});
