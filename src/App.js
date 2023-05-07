import { useState, useEffect } from 'react';
import React from 'react';

export default function App() {
  let [weather, setWeather] = useState({});

  const API_KEY = process.env.REACT_APP_WEATHERAPI;
  let message = '';
  // if (weather.current.temp_f < 60) {
  //   message =
  //     "It's a bit chilly, you might want to grab a beanie and patagonia vest.";
  // } else if (weather.current.temp_f > 60) {
  //   message =
  //     "Geez its warm time to head to the beach. You still might want to brab a beanie and a light jacket. ";
  // }

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=San Francisco&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  return <div className="App">fooooo</div>;
}
