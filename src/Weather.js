import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

function Weather() {
  let [city, setCity] = useState("Lisbon");
  let [unitSystem, setUnitSystem] = useState("metric");
  let [weatherData, setWeatherData] = useState(Object);

  function updateCity(event) {
    let newCity = event.target.value.trim();
    if (newCity && newCity.length > 0) {
      setCity(newCity);
    }
  }

  function getCurrentLocationWeather() {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     setLoading(true);
    //     getCityWeather(
    //       null,
    //       position.coords.latitude,
    //       position.coords.longitude,
    //       unitSystem
    //     );
    //   });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      // setLoading(true);
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
    console.log(response);
  }

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
    </div>
  );
}

export default Weather;
