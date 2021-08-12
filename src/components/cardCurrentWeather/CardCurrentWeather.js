import React from "react";
import "./CardCurrentWeather.css";

const CardCurrentWeather = ({ data }) => {
  return (
    <div className="card">
      <h2>Current weather</h2>
      <div>{Math.round(data?.main?.temp)}°C</div>
    </div>
  );
};

export default CardCurrentWeather;
