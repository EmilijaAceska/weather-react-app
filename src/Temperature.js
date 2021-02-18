import React, {useState} from "react";

export default function Temperature(props){
  const [unit, setUnit]=useState("celsius");
  function displayCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }
  
  function displayFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if(unit === "celsius"){
    return (
    <div className="Temperature">
      <span>{Math.round(props.celsius)}°</span>
      <span className="cel-fah-deg">
        C /{" "} 
        <a href="/" onClick={displayFahrenheit}> F</a>
      </span>
    </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9)/5+32;
    return (
    <div className="Temperature">
      <span>{Math.round(fahrenheit)}°</span>
      <span className="cel-fah-deg">
        <a href="/" onClick={displayCelsius}>C </a>
         /{" "} F       
      </span>
    </div>
  );
  }
}