import React, { useState, useEffect } from 'react';

export default function App() {
  let [weather, setWeather] = useState({});

  // this does not work??? const API_KEY = process.env.REACT_APP_WEATHERAPI;
  let message = '';
  if (weather.temp_f < 60) {
    message =
      "🥶 It's a bit chilly, you might want to grab a beanie and patagonia vest.";
  } else if (weather.temp_f > 60) {
    message =
      "Geez its warm time to head to the beach. You still might want to brab a beanie and a light jacket. ";
  }

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=1f3e1456a5a2453ba82165140230705&q=San Francisco&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data.current));
  }, []);

  return <div className="App">
    <h1>It's currently {weather.temp_f + "°"} in San Francisco.</h1>
    <p>{message}</p>
  
  </div>;
}
