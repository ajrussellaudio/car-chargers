import { combineReducers } from "redux";
import locationsReducer from "./locations";

export default combineReducers({
  locations: locationsReducer
});
