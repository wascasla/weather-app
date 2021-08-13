import { combineReducers } from "redux";
import WeatherReducer from "./../screens/inicio/redux-sagas/reducers";

const createRootReducer = combineReducers({
  weather: WeatherReducer,
});

export default createRootReducer;
