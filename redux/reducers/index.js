import { combineReducers } from 'redux';
import Auth from "./auth";
import Location from "./location";

const createRootReducer = () => combineReducers({
  auth: Auth,
  locationData: Location
});

export default createRootReducer;
