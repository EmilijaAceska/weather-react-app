import React from "react";
import './Weather.css';

export default function Weather(){
  return (
     <div className="weather-container">
          <h1>Prilep, North Macedonia Weather</h1>
          <p>Wednesday 12:55</p>     
          
          <div className="row">
            <div className="col-6">
              <p>
              <span>-1</span>
              <span>°C</span>
              </p>
              <ul>
                <li>Partly Cloudy</li>
                <li>Humidity: 5%</li>
                <li>Wind:1 km/h</li>
              </ul>
            </div>
            <div className="col-6">
              <i class="fas fa-cloud-sun"></i>
              <p>
                <span>1° / </span>
                <span>-9°</span>
              </p>
            </div>
          </div>
    </div>
  );
}