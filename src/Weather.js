import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import ForecastDetail from "./ForecastDetail";
import Spinner from "./Spinner";
import axios from "axios";

import "./Weather.css";

function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [unitSystem, setUnitSystem] = useState(props.unitSystem);
  const [weatherData, setWeatherData] = useState({ hasData: false });

  useEffect(() => {
    getCityWeather(city, null, null, unitSystem);
  }, [unitSystem]);

  function updateCity(event) {
    let newCity = event.target.value.trim();
    if (newCity && newCity.length > 0) {
      setCity(newCity);
    }
  }

  function getCurrentLocationWeather() {
    setWeatherData({
      hasData: false,
    });
    navigator.geolocation.getCurrentPosition(function (position) {
      getCityWeather(
        null,
        position.coords.latitude,
        position.coords.longitude,
        unitSystem
      );
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setWeatherData({
      hasData: false,
    });
    if (city) {
      getCityWeather(city, null, null, unitSystem);
      event.target.reset();
    }
  }

  function getCityWeather(city, latitude, longitude, unitSystem) {
    let key = "491127d7fac80a30edab9961c6790b41";
    let url;
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&&units=${unitSystem}`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&&units=${unitSystem}`;
    }

    axios.get(url).then(updateWeather);
  }

  function updateWeather(response) {
    setWeatherData({
      hasData: true,
      cityName: response.data.city.name,
      temperature: Math.round(response.data.list[0].main.temp),
      unitSystem: unitSystem,
      description: response.data.list[0].weather[0].description,
      humidity: response.data.list[0].main.humidity,
      wind: Math.round(response.data.list[0].wind.speed),
      dateTime: response.data.list[0].dt,
      weatherIcon: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      data: saveForecast(response.data.list),
    });
  }

  function saveForecast(forecastList) {
    let data = [];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 7; i < forecastList.length; i += 8) {
      let date = new Date(forecastList[i].dt * 1000);
      data.push({
        day: days[date.getDay()],
        temp: Math.round(forecastList[i].main.temp),
        icon: `http://openweathermap.org/img/wn/${forecastList[i].weather[0].icon}@2x.png`,
        description: forecastList[i].weather[0].description,
        unit: unitSystem === "metric" ? "C" : "F",
      });
    }
    return data;
  }

  function changeUnitSystem() {
    setUnitSystem(unitSystem === "metric" ? "imperial" : "metric");
  }

  if (weatherData.hasData) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col mr-0">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="cityName"
                      placeholder="Type a city..."
                      autoComplete="off"
                      autoFocus="on"
                      maxLength="100"
                      onChange={updateCity}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-outline-secondary ml-1 mr-3"
                    id="search-location"
                    value="Search"
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    id="current-location"
                    onClick={getCurrentLocationWeather}
                  >
                    Current City
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <WeatherInfo
          weatherData={weatherData}
          onChangeUnitSystem={changeUnitSystem}
        />
        <div className="row forecast-section">
          {weatherData.data.map(function (item) {
            return <ForecastDetail data={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Weather;
