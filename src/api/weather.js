import api from "./api";

// eslint-disable-next-line no-undef
const key = process.env.REACT_APP_KEY_WEATHER_API;


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