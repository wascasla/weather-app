import React, { useEffect, useState } from "react";
import CardCurrentWeather from "../../components/cardCurrentWeather/CardCurrentWeather";
import CardForecastWeather from "../../components/cardForecastWeather/CardForecastWeather";
import FormSelectCity from "../../components/formSelectCity/FormSelectCity";
import { getCurrentWeather, getForecastWeather } from "./redux-sagas/actions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import BoxForecast from "../../components/boxForecast/BoxForecast";

const Inicio = () => {
  const dispatch = useDispatch();
  const [currentPosition, setCurrentPosition] = useState();

  const { currentWeather, forecatsWeather, loadingCurrent, loadingForecast, errorCurrent, errorForecast } = useSelector(
    (state) => state.weather
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition(position.coords);
    });
  }, []);

  useEffect(() => {
    if (currentPosition) {
      dispatch(getCurrentWeather(currentPosition));
      dispatch(getForecastWeather(currentPosition));
    }
  }, [currentPosition]);

  return (
    <div>
      <h1>Clima en {loadingCurrent ? "..." : currentWeather?.name} </h1>
      <FormSelectCity setCurrentPosition={setCurrentPosition} />
      <CardCurrentWeather data={currentWeather} loading={loadingCurrent} error={errorCurrent} />
      <BoxForecast forecatsWeatherList={forecatsWeather} loading={loadingForecast} error={errorForecast} />
    </div>
  );
};

export default Inicio;
