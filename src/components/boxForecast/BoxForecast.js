import React from "react";
import CardForecastWeather from "../cardForecastWeather/CardForecastWeather";
import Spinner from "../spinner/Spinner";
import "./BoxForecast.css";

const BoxForecast = ({ forecatsWeatherList, loading, error }) => {
  return (
    <>
      <h3>Clima para los próximos 5 días </h3>
      {forecatsWeatherList ? (
        <div className="box-forecast">
          {forecatsWeatherList?.map((w, i) => (
            <CardForecastWeather key={w.sunset} data={w} index={i} />
          ))}
        </div>
      ) : null}
      {loading ? <Spinner /> : null}
      {error ? error : null}
    </>
  );
};

export default BoxForecast;
