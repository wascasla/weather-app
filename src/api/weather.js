import api from "./api";

const key = process.env.REACT_APP_KEY_WEATHER_API;

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getCurrentWeather: function (latitude, longitude) {
    return api.get(`weather/?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`);
  },

  getForecastWeather: function (latitude, longitude) {
    return api.get(
      `onecall?lat=${latitude}&lon=${longitude}&exclude=current,hourly,minutely,alerts&units=metric&appid=${key}`
    );
  },
};