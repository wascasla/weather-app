import React, { useEffect, useState } from "react";
import CardCurrentWeather from "../../components/cardCurrentWeather/CardCurrentWeather";
import CardForecastWeather from "../../components/cardForecastWeather/CardForecastWeather";
import FormSelectCity from "../../components/formSelectCity/FormSelectCity";
import { getCurrentWeather, getForecastWeather } from "./redux-sagas/actions";
import { useDispatch, useSelector } from "react-redux";

const Inicio = () => {
  const dispatch = useDispatch();
  const [currentPosition, setCurrentPosition] = useState();

  const { currentWeather, forecatsWeather } = useSelector((state) => state.weather);

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
      <h1>Clima en {currentWeather?.name} </h1>
      <FormSelectCity setCurrentPosition={setCurrentPosition} />
      <CardCurrentWeather data={currentWeather} />
      <h3>Clima para los próximos 5 días </h3>
      {forecatsWeather?.map((w, i) => (
        <CardForecastWeather key={i} data={w} index={i} />
      ))}
    </div>
  );
};

export default Inicio;
