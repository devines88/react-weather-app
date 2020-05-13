import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-container">
          <div className="row">
            <div className="col-12">
              <h1 className="title">Weather Forecast</h1>
            </div>
          </div>
        </div>
        <small>
          <span>Open-source code by Inês Nunes on </span>
          <a
            href="https://github.com/devines88/react-weather-app"
            target="_blank"
            rel="noOpener noReferrer"
          >
            GitHub
          </a>
          <span>, hosted on </span>
          <a
            href="https://heuristic-borg-ffda2b.netlify.app/"
            target="_blank"
            rel="noOpener noReferrer"
          >
            Netlify
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
