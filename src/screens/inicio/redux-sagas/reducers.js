import createReducer from "../../../store/createReducer";
import * as types from "./types";

const initialState = {
  currentWeather: undefined,
  forecatsWeather: [],
  loadingCurrent: false,
  loadingForecast: false,
  errorCurrent: undefined,
  errorForecast: undefined,
};

const WeatherReducer = createReducer(initialState, {
  [types.GET_CURRENT_WEATHER](state, action) {
    return { ...state, loadingCurrent: true, currentWeather: undefined, errorCurrent: undefined };
  },
  [types.GET_CURRENT_WEATHER_SUCCESS](state, action) {
    return { ...state, loadingCurrent: false, currentWeather: action.payload };
  },
  [types.GET_CURRENT_WEATHER_ERROR](state, action) {
    return {
      ...state,
      loadingCurrent: false,
      errorCurrent: "Error al obtener el clima actual, intente más tarde por favor",
    };
  },

  [types.GET_FORECAST_WEATHER](state, action) {
    return { ...state, loadingForecast: true, forecatsWeather: [], errorForecast: undefined };
  },
  [types.GET_FORECAST_WEATHER_SUCCESS](state, action) {
    let data = action.payload;
    return { ...state, loadingForecast: false, forecatsWeather: data.slice(0, 5) };
  },
  [types.GET_FORECAST_WEATHER_ERROR](state, action) {
    return {
      ...state,
      loadingForecast: false,
      errorForecast: "Error al obtener el clima para los próximos días, intente más tarde por favor",
    };
  },
});

export default WeatherReducer;
