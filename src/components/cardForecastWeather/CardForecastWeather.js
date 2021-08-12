import React from "react";
import moment from "moment";
import "./CardForecastWeather.css";

const CardForecastWeather = ({ data }) => {
  console.log(data);
  return (
    <div className="box">
      {data.map((dato) => (
        <div key={dato?.dt} className="card-for">
          <h5>{moment(dato?.dt_txt).format("DD-MM-yyyy HH:mm:ss")}</h5>
          <div>{Math.round(dato?.main?.temp)}°C</div>
        </div>
      ))}
    </div>
  );
};

export default CardForecastWeather;
