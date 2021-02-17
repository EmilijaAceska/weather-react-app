import React from "react";
import './Weather.css';

export default function Weather(){
  return (
     <div className="Weather">
          <h1>Prilep, North Macedonia Weather</h1>
          <p className="currentDate">Wednesday 12:55</p>     
          
          <div className="row">
            <div className="col-6">
              <p className="degrees">
              <span>-1</span>
              <span>°C</span>
              </p>
              <ul className="about-weather">
                <li className="description">Partly Cloudy</li>
                <li className="humidity">Humidity: 5%</li>
                <li className="wind-speed">Wind:1 km/h</li>
              </ul>
            </div>
            <div className="col-6 min-max">
              <i className="fas fa-cloud-sun"></i>
              <p className="min-max-deg">
                <span>1° / </span>
                <span>-9°</span>
              </p>
            </div>
          </div>
    </div>
  );
}