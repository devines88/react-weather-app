import React, { useState } from "react";
import "./WeatherInfo.css";

function WeatherInfo(props) {
  function formatDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let weekDay = days[date.getDay()];
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${weekDay} ${addZero(hour)}:${addZero(minutes)}`;
  }

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function convertUnitSystem(event) {
    event.preventDefault();
    props.onChangeUnitSystem(
      props.weatherData.cityName,
      props.weatherData.unitSystem === "metric" ? "imperial" : "metric"
    );
  }

  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-12">
          <div className="current-city">
            <h2 id="current-city">{props.weatherData.cityName}</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="current-day-time">
            Last Updated on{" "}
            <span id="current-day-time">
              {formatDate(props.weatherData.dateTime)}
            </span>
          </div>
          <div id="weather-description" className="current-weather">
            {props.weatherData.description}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-7 current-temperature">
          <div className="row">
            <div className="col-sm-3">
              <img
                src={props.weatherData.weatherIcon}
                alt={props.weatherData.description}
                title={props.weatherData.description}
                id="weather-icon"
              />
            </div>
            <div className="col-sm-9">
              <h1>
                <span id="current-temperature">
                  {props.weatherData.temperature} º
                </span>
                <span id="current-unit">
                  {props.weatherData.unitSystem === "metric" ? "C" : "F"}
                </span>
                <span className="units">
                  {" "}
                  |
                  <a href="/" id="unit-link" onClick={convertUnitSystem}>
                    {props.weatherData.unitSystem === "metric" ? "F" : "C"}
                  </a>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-5 weather-stats">
          <div className="row">Humidity: {props.weatherData.humidity}%</div>
          <div className="row">
            Wind: {props.weatherData.wind}{" "}
            {props.weatherData.unitSystem === "metric" ? "m/s" : "mph"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
