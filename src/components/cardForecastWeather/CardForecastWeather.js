import React from "react";
import moment from "moment";
import "./CardForecastWeather.css";

const CardForecastWeather = ({ data, index }) => {
  return (
    <div className="box">
      <div key={data?.dt} className="card-for">
        <h5>
          {moment()
            .add(index + 1, "d")
            .format("DD/MM")}
        </h5>
        <div>{Math.round(data?.temp?.day)}°C</div>
      </div>
    </div>
  );
};

export default CardForecastWeather;
