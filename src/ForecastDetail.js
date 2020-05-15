import React from "react";
import "./ForecastDetail.css";

function ForecastDetail(props) {
  return (
    <div className="ForecastDetail col">
      <div className="week-days">{props.data.day}</div>
      <div>
        <img
          src={props.data.icon}
          alt={props.data.description}
          title={props.data.description}
          id="forecast-icon"
        />
      </div>
      <div className="week-temperatures">
        {props.data.temp} º{props.data.unit}
      </div>
    </div>
  );
}

export default ForecastDetail;
