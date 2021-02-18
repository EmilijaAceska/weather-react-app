import React from "react";
import Icon from "./Icon";

export default function ForecastDisplay(props){
  function hours(){
    let date =new Date(props.data.dt * 1000);
    let hours=date.getHours();
    return `${hours}:00`;
  }

  function temperature(){
    let temperatureMin=Math.round(props.data.main.temp_min);
    let temperatureMax=Math.round(props.data.main.temp_max);
    return `${temperatureMin} / ${temperatureMax}`;
  }
  return (
    <div className="ForecastDisplay col">
      {hours()}
      <Icon src={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}