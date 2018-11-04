import { ofType } from "redux-observable";
import { switchMap, map, pluck, catchError } from "rxjs/operators";
import {
  FETCH_LOCATIONS,
  fetchLocationsSuccess,
  fetchLocationsFailure
} from "../actions";

const url = "/api/retrieve/registry/format/json";

export const fetchLocationsEpic = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(FETCH_LOCATIONS),
    switchMap(() =>
      getJSON(url).pipe(
        pluck("ChargeDevice"),
        map(response => fetchLocationsSuccess(response))
      )
    ),
    catchError(error => fetchLocationsFailure(error))
  );
