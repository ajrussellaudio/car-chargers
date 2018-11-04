import { combineEpics } from "redux-observable";
import { fetchLocationsEpic } from "./fetch_locations";

export default combineEpics(fetchLocationsEpic);
