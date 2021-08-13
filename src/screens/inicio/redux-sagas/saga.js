import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as types from "./types";
import * as actions from "./actions";
import { weather } from "../../../api";

function* getCurrentWeather(action) {
  try {
    const { latitude, longitude } = action.payload;
    const response = yield call(weather.getCurrentWeather, latitude, longitude);
    console.log("getCurrentWeather sagass", response.data);
    yield put(actions.getCurrentWeatherSuccess(response.data));
  } catch (error) {
    yield put(actions.getCurrentWeatherError(error));
  }
}

function* watchGetCurrentWeather() {
  yield takeEvery(types.GET_CURRENT_WEATHER, getCurrentWeather);
}

function* getForecatsWeather(action) {
  try {
    const { latitude, longitude } = action.payload;
    const response = yield call(weather.getForecastWeather, latitude, longitude);
    console.log("getForecatsWeather sagass", response.data.daily);
    yield put(actions.getForecastWeatherSuccess(response.data.daily));
  } catch (error) {
    console.log("ERROR forecats", error);
    yield put(actions.getForecastWeatherError(error));
  }
}

function* watchGetForecatsWeather() {
  yield takeEvery(types.GET_FORECAST_WEATHER, getForecatsWeather);
}

function* WeatherSaga() {
  yield all([fork(watchGetCurrentWeather), fork(watchGetForecatsWeather)]);
}

export default WeatherSaga;
