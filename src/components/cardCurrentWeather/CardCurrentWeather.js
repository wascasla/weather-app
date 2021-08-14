import React from "react";
import Spinner from "../spinner/Spinner";
import "./CardCurrentWeather.css";

const CardCurrentWeather = ({ data, loading }) => {
  return (
    <div className="card">
      {!loading ? (
        <>
          <h3>Actual</h3>
          <div>{Math.round(data?.main?.temp)}°C</div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CardCurrentWeather;
