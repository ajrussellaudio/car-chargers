import { combineReducers } from "redux";
import locationsReducer from "./locations";
import filterReducer from "./filter";

export default combineReducers({
  locations: locationsReducer,
  filter: filterReducer
});
