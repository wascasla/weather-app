import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCurrentWeather from "../../components/cardCurrentWeather/CardCurrentWeather";
import CardForecastWeather from "../../components/cardForecastWeather/CardForecastWeather";

const Inicio = () => {
  const [currentPosition, setCurrentPosition] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [forecastWeatherList, setForecastWeatherList] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      console.log(position.coords);
      setCurrentPosition(position.coords);
    });
  }, []);

  const getCurrentWeather = (lat, long) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=f1542c7b0d493e2cef682df5a1a98108`
      )
      .then((res) => {
        console.log("clima", res.data);
        setCurrentWeather(res.data);
      });
  };

  const getForecastWeather = (lat, long) => {
    let datos = [];
    let pivot = [];
    let final = [];
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=f1542c7b0d493e2cef682df5a1a98108`
      )
      .then((res) => {
        console.log("FORECAST", res.data);
        datos = res.data.list;

        while (datos.length > 0) {
          let algo = datos[0].dt_txt.substring(0, 10);
          let cur = datos.filter((fil) => fil.dt_txt.substring(0, 10) === algo);
          pivot.push([...cur]);
          datos = datos.filter((fil) => fil.dt_txt.substring(0, 10) !== algo);
        }
        pivot = pivot.slice(0, 5);
        setForecastWeatherList(pivot);

        console.log("final", final);
      });
  };

  useEffect(() => {
    if (currentPosition) {
      getCurrentWeather(currentPosition.latitude, currentPosition.longitude);
      getForecastWeather(currentPosition.latitude, currentPosition.longitude);
    }
  }, [currentPosition]);

  return (
    <div>
      <h1>Clima en {currentWeather?.name} </h1>
      <CardCurrentWeather data={currentWeather} />

      {forecastWeatherList?.map((w, i) => (
        <CardForecastWeather key={i} data={w} />
      ))}
    </div>
  );
};

export default Inicio;
