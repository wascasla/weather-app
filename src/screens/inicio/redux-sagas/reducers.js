import createReducer from "../../../store/createReducer";
import * as types from "./types";

const initialState = {
  currentWeather: undefined,
  forecatsWeather: [],
  loadingCurrent: false,
  loadingForecast: false,
};

const WeatherReducer = createReducer(initialState, {
  [types.GET_CURRENT_WEATHER](state, action) {
    return { ...state, loadingCurrent: true, currentWeather: undefined };
  },
  [types.GET_CURRENT_WEATHER_SUCCESS](state, action) {
    return { ...state, loadingCurrent: false, currentWeather: action.payload };
  },
  [types.GET_CURRENT_WEATHER_ERROR](state, action) {
    return { ...state, loadingCurrent: false };
  },

  [types.GET_FORECAST_WEATHER](state, action) {
    return { ...state, loadingForecast: true, forecatsWeather: [] };
  },
  [types.GET_FORECAST_WEATHER_SUCCESS](state, action) {
    let data = action.payload;
    return { ...state, loadingForecast: false, forecatsWeather: data.slice(0, 5) };
  },
  [types.GET_FORECAST_WEATHER_ERROR](state, action) {
    return { ...state, loadingForecast: false };
  },
});

export default WeatherReducer;
