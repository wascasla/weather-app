import { all } from "redux-saga/effects";
import WeatherSagas from "./../screens/inicio/redux-sagas/saga";

export default function* rootSaga(getState) {
  yield all([WeatherSagas()]);
}
