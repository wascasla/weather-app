import React from "react";
import CardForecastWeather from "../cardForecastWeather/CardForecastWeather";
import Spinner from "../spinner/Spinner";
import "./BoxForecast.css";

const BoxForecast = ({ forecatsWeatherList, loading }) => {
  return (
    <>
      {!loading ? (
        <div className="box-forecast">
          {forecatsWeatherList?.map((w, i) => (
            <CardForecastWeather key={w.sunset} data={w} index={i} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default BoxForecast;
