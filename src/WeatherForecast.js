import React, { useState } from "react";
import ForecastDetail from "./ForecastDetail";
import "./WeatherForecast.css";

function WeatherForecast(props) {
  let [results, setResults] = useState(props.forecast);

  return (
    <div className="WeatherForecast">
      <div className="row forecast-section">
        {results.map(function (item) {
          return <ForecastDetail data={item} />;
        })}
      </div>
    </div>
  );
}

export default WeatherForecast;
