import React, { useState, useEffect } from 'react';

export default function App() {
  let [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // I should probably store this in the .env file but couldn't get it to work. Might be a stackblitz thing.
  // const API_KEY = process.env.REACT_APP_WEATHERAPI;
  let message = {};
  if (weather.temp_f < 60) {
    message = {
      emoji: "🥶",
      text: "It's a bit chilly, you might want to grab a beanie and patagonia vest."
    }
  } else if (weather.temp_f > 60) {
    message = {
      emoji: "🏖️",
      text: "Geez its warm! Time to head to the beach. You still might want to brab a beanie and a light jacket."
    }
  }

  const fetchWeather = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=1f3e1456a5a2453ba82165140230705&q=San Francisco&aqi=no`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    setWeather(data.current);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="emoji">{message.emoji}</h1>
          <h1>It's currently {weather.temp_f + '°'} in San Francisco.</h1>
          <p>{message.text}</p>
        </div>
      )}
    </div>
  );
}
