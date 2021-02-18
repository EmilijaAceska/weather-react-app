import React, {useState} from "react";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import axios from "axios";
import './Weather.css';


export default function Weather(props){
  const [weather, setWeather]=useState({ready: false});
  const [city, setCity]=useState(props.defaultCity);
  function handleWeather(response){
    console.log(response.data);
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperatureMin: response.data.main.temp_min,
      temperatureMax: response.data.main.temp_max,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }
  function searchCity(){
    const apiKey="93fe0a104f408de6497bde5628168f6f";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleWeather);  
  }

  function handleSubmit(event){
    event.preventDefault();
    searchCity(city);
  }
  function changeCity(event){
    setCity(event.target.value);
  }

  if(weather.ready){
    return (
     <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row m-auto">
            <div className="col-9">
              <input type="search" 
                    placeholder="Search for city.." 
                    className="form-control" 
                    onChange={changeCity} />
            </div>
            <div className="col-3">
              <button className="btn btn-light">Search</button>
            </div>
          </div>
        </form>
        
        <WeatherData data={weather} />
        <Forecast city={weather.city}/>

    </div>
  );
  } else{
    searchCity();    
    return "Loading.."
  }
}