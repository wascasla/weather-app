import * as types from "./types";

const result = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

export const getCurrentWeather = (payload) => result(types.GET_CURRENT_WEATHER, payload);
export const getCurrentWeatherSuccess = (payload) => result(types.GET_CURRENT_WEATHER_SUCCESS, payload);
export const getCurrentWeatherError = (payload) => result(types.GET_CURRENT_WEATHER_ERROR, payload);

export const getForecastWeather = (payload) => result(types.GET_FORECAST_WEATHER, payload);
export const getForecastWeatherSuccess = (payload) => result(types.GET_FORECAST_WEATHER_SUCCESS, payload);
export const getForecastWeatherError = (payload) => result(types.GET_FORECAST_WEATHER_ERROR, payload);
