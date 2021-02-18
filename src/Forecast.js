import React, {useState} from "react";
import ForecastDisplay from "./ForecastDisplay";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props){
  const [loaded, setLoaded]=useState(false);
  const [forecast, setForecast]=useState(null);
  function displayForecast(response){
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === forecast.city.name){
    return (
      <div className="Forecast">
        <h3>Today's Forecast for {props.city}</h3>
        <div className="row">
          <ForecastDisplay data={forecast.list[0]}/>
          <ForecastDisplay data={forecast.list[1]}/>
          <ForecastDisplay data={forecast.list[2]}/>
          <ForecastDisplay data={forecast.list[3]}/>
          <ForecastDisplay data={forecast.list[4]}/>
        </div>
      </div>
    );
  } else {
    let apiKey="93fe0a104f408de6497bde5628168f6f";
    let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}