import { combineReducers } from "redux";
import userReducer from "./user";
import gpsReducer from "./gps";
import indexReducer from "./index_array";

const allReducers = combineReducers({
  user: userReducer,
  gps: gpsReducer,
  index: indexReducer,
});
export default allReducers;
