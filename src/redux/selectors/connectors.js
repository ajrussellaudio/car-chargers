import { createSelector } from "reselect";
import { uniq } from "lodash";
import { getAllLocations } from "./locations";

export const getConnectorNames = createSelector([getAllLocations], locations =>
  locations.reduce((connectionNames, location) => {
    return uniq([
      ...connectionNames,
      ...location.Connector.map(connector => connector.ConnectorType)
    ]);
  }, [])
);
