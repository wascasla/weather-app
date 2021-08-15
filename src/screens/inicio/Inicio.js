import React, { useEffect, useState } from "react";
import CardCurrentWeather from "../../components/cardCurrentWeather/CardCurrentWeather";
import FormSelectCity from "../../components/formSelectCity/FormSelectCity";
import { getCurrentWeather, getForecastWeather } from "./redux-sagas/actions";
import { useDispatch, useSelector } from "react-redux";
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
      getWeather(currentPosition);
    }
  }, [currentPosition]);

  const getWeather = (city) => {
    dispatch(getCurrentWeather(city));
    dispatch(getForecastWeather(city));
  };

  return (
    <div>
      <h1>Clima en {loadingCurrent ? "..." : currentWeather?.name} </h1>
      <FormSelectCity getWeather={getWeather} />
      <CardCurrentWeather data={currentWeather} loading={loadingCurrent} error={errorCurrent} />
      <BoxForecast forecatsWeatherList={forecatsWeather} loading={loadingForecast} error={errorForecast} />
    </div>
  );
};

export default Inicio;
