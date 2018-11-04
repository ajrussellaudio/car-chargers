import { TestScheduler } from "rxjs/testing";
import { fetchLocationsEpic } from "./fetch_locations";
import { FETCH_LOCATIONS, FETCH_LOCATIONS_SUCCESS } from "../actions";

describe("fetchLocationsEpic", () => {
  const scheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });

  it("fetches the locations", () => {
    scheduler.run(helpers => {
      const { hot, cold, expectObservable } = helpers;
      const action$ = hot("-a", {
        a: { type: FETCH_LOCATIONS }
      });
      const state$ = null;
      const dependencies = {
        getJSON: () =>
          cold("---a", {
            a: { ChargeDevice: [] }
          })
      };
      const output$ = fetchLocationsEpic(action$, state$, dependencies);

      expectObservable(output$).toBe("----a", {
        a: {
          type: FETCH_LOCATIONS_SUCCESS,
          payload: []
        }
      });
    });
  });
});
