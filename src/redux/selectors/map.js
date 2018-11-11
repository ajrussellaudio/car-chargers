import { createSelector } from "reselect";
import { getFilteredLocations } from "./locations";

export const getMapBounds = state => state.map.bounds;
export const getPosition = state => state.map.position;
export const getZoom = state => state.map.zoom;

export const getFilteredLocationsWithinMapBounds = createSelector(
  [getFilteredLocations, getMapBounds],
  (locations, bounds) =>
    locations.filter(
      ({ ChargeDeviceLocation: { Latitude, Longitude } }) =>
        Latitude <= bounds._northEast.lat &&
        Latitude >= bounds._southWest.lat &&
        Longitude <= bounds._northEast.lng &&
        Longitude >= bounds._southWest.lng
    )
);
