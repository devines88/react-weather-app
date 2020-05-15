import React, { useState } from "react";
import "./WeatherForecast.css";

function WeatherForecast(props) {
  let [results, setResults] = useState(props.forecast);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-12 forecast-section">
          <table className="table table-borderless">
            <thead>
              <tr id="forecast-days" className="week-days">
                <th scope="col">{results[0].day}</th>
                <th scope="col">{results[1].day}</th>
                <th scope="col">{results[2].day}</th>
                <th scope="col">{results[3].day}</th>
                <th scope="col">{results[4].day}</th>
              </tr>
            </thead>
            <tbody>
              <tr id="forecast-icons">
                <td>
                  <img
                    src={results[0].icon}
                    alt={results[0].description}
                    title={results[0].description}
                    id="forecast-icon"
                  />
                </td>
                <td>
                  <img
                    src={results[1].icon}
                    alt={results[1].description}
                    title={results[1].description}
                    id="forecast-icon"
                  />
                </td>
                <td>
                  <img
                    src={results[2].icon}
                    alt={results[2].description}
                    title={results[2].description}
                    id="forecast-icon"
                  />
                </td>
                <td>
                  <img
                    src={results[3].icon}
                    alt={results[3].description}
                    title={results[3].description}
                    id="forecast-icon"
                  />
                </td>
                <td>
                  <img
                    src={results[4].icon}
                    alt={results[4].description}
                    title={results[4].description}
                    id="forecast-icon"
                  />
                </td>
              </tr>
              <tr id="forecast-temperatures" className="week-temperatures">
                <td>
                  {results[0].temp}º
                  <span className="used-unit"> {results[0].unit}</span>
                </td>
                <td>
                  {results[1].temp}º
                  <span className="used-unit"> {results[1].unit}</span>
                </td>
                <td>
                  {results[2].temp}º
                  <span className="used-unit"> {results[2].unit}</span>
                </td>
                <td>
                  {results[3].temp}º
                  <span className="used-unit"> {results[3].unit}</span>
                </td>
                <td>
                  {results[4].temp}º
                  <span className="used-unit"> {results[4].unit}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
