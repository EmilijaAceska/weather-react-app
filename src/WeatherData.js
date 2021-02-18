import React from "react";
import CurrentDate from "./CurrentDate";
import Icon from "./Icon";

export default function WeatherData(props){
  return (
    <div className="Weather Data">
      <h1>{props.data.city}</h1>
          <CurrentDate date={props.data.date} />     
          <div className="row">
            <div className="col-6">
              <p className="degrees">
              <span>{Math.round(props.data.temperature)}</span>
              <span>°C</span>
              </p>
              <ul className="about-weather">
                <li className="description text-capitalize">{props.data.description}</li>
                <li className="humidity">Humidity: {props.data.humidity}{" "}%</li>
                <li className="wind-speed">Wind: {Math.round(props.data.wind)}{" "} km/h</li>
              </ul>
            </div>
            <div className="col-6 min-max">
              <Icon src={props.data.icon} alt={props.data.description}/>
              <p className="min-max-deg">
                <span>{Math.round(props.data.temperatureMin)}° / </span>
                <span>{Math.round(props.data.temperatureMax)}°</span>
              </p>
            </div>
          </div>
    </div>
  );
}