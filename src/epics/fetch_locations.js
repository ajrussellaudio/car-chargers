import { ofType } from "redux-observable";
import { switchMap, map, catchError } from "rxjs/operators";
import {
  FETCH_LOCATIONS,
  fetchLocationsSuccess,
  fetchLocationsFailure
} from "../actions";

const url =
  "http://chargepoints.dft.gov.uk/api/retrieve/registry/format/json/limit/100";

export const fetchLocationsEpic = (action$, state$, { getJSON }) =>
  action$.pipe(
    ofType(FETCH_LOCATIONS),
    switchMap(() =>
      getJSON(url).pipe(map(response => fetchLocationsSuccess(response)))
    ),
    catchError(error => fetchLocationsFailure(error))
  );
