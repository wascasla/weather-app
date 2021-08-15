import React from "react";
import CardForecastWeather from "../cardForecastWeather/CardForecastWeather";
import Spinner from "../spinner/Spinner";
import "./BoxForecast.css";
import PropTypes from "prop-types";

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

BoxForecast.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  forecatsWeatherList: PropTypes.array,
};

export default BoxForecast;
