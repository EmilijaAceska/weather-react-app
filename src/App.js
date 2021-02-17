import React from "react";
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prilep" />
        <footer>
          <p>
            <a href="https://github.com/EmilijaAceska/weather-react-app.git">Open-source code,</a> {" "}
            by Emilija Aceska
          </p>
        </footer>
      </div>
    </div>
  );
}


