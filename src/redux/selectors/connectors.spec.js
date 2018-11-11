import { getConnectorNames } from "./connectors";

describe("getConnectorNames", () => {
  let SPROCKET, WIDGET;
  beforeEach(() => {
    SPROCKET = { ConnectorType: "SPROCKET" };
    WIDGET = { ConnectorType: "WIDGET" };
  });

  it("gets the names of connector types from locations in state", () => {
    const state = {
      locations: {
        list: [{ Connector: [SPROCKET] }, { Connector: [WIDGET] }]
      }
    };
    expect(getConnectorNames(state)).toEqual(["SPROCKET", "WIDGET"]);
  });

  it("does not include duplicates", () => {
    const state = {
      locations: {
        list: [{ Connector: [SPROCKET, WIDGET] }, { Connector: [SPROCKET] }]
      }
    };
    expect(getConnectorNames(state)).toEqual(["SPROCKET", "WIDGET"]);
  });
});
