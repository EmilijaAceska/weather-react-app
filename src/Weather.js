import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import CurrentDate from "./CurrentDate";

export default function Weather(props){
  const [weather, setWeather]=useState({ready: false});
  function handleWeather(response){
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperatureMin: response.data.main.temp_min,
      temperatureMax: response.data.main.temp_max
    });
  }
  if(weather.ready){
    return (
     <div className="Weather">
          <h1>{props.defaultCity}, North Macedonia Weather</h1>
          <CurrentDate date={weather.date} />     
          <div className="row">
            <div className="col-6">
              <p className="degrees">
              <span>{Math.round(weather.temperature)}</span>
              <span>°C</span>
              </p>
              <ul className="about-weather">
                <li className="description text-capitalize">{weather.description}</li>
                <li className="humidity">Humidity: {weather.humidity}{" "}%</li>
                <li className="wind-speed">Wind: {Math.round(weather.wind)}{" "} km/h</li>
              </ul>
            </div>
            <div className="col-6 min-max">
              <img src={weather.icon} alt="{weather.description}" />
              <p className="min-max-deg">
                <span>{Math.round(weather.temperatureMin)}° / </span>
                <span>{Math.round(weather.temperatureMax)}°</span>
              </p>
            </div>
          </div>
    </div>
  );
  } else{
  const apiKey="93fe0a104f408de6497bde5628168f6f";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleWeather);
  return "Loading.."
  }
}