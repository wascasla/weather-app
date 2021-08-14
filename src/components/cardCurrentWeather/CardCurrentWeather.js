import React from "react";
import Spinner from "../spinner/Spinner";
import "./CardCurrentWeather.css";

const CardCurrentWeather = ({ data, loading, error }) => {
  return (
    <div className="card">
      <h3>Actual</h3>
      {data ? (
        <>
          <div>{Math.round(data?.main?.temp)}°C</div>
        </>
      ) : null}
      {loading && <Spinner />}
      {error ? error : null}
    </div>
  );
};

export default CardCurrentWeather;
