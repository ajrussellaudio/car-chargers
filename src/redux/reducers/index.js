import { combineReducers } from "redux";
import locationsReducer from "./locations";
import filterReducer from "./filter";
import mapReducer from "./map";

export default combineReducers({
  locations: locationsReducer,
  filter: filterReducer,
  map: mapReducer
});
