import { createSelector } from "reselect";
import { getFilteredLocations } from "./locations";

export const getMapBounds = state => state.map.bounds;

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
