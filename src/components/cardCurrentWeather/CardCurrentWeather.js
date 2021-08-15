import React from "react";
import Spinner from "../spinner/Spinner";
import "./CardCurrentWeather.css";
import PropTypes from "prop-types";

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

CardCurrentWeather.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  data: PropTypes.any,
};

export default CardCurrentWeather;
