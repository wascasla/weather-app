import React from "react";
import moment from "moment";
import "./CardForecastWeather.css";
import PropTypes from "prop-types";

const CardForecastWeather = ({ data, index }) => {
  return (
    <div className="box">
      <div key={data?.dt} className="card-for">
        <h5>
          {moment()
            .add(index + 1, "d")
            .format("DD/MM")}
        </h5>
        <div>{Math.round(data?.temp?.max)}°C</div>
        <div>{Math.round(data?.temp?.min)}°C</div>
      </div>
    </div>
  );
};

CardForecastWeather.propTypes = {
  data: PropTypes.any,
  index: PropTypes.number,
};

export default CardForecastWeather;
