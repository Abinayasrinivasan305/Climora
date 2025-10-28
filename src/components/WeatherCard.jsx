import React from "react";
import "./../styles/WeatherCard.css";

const WeatherCard = ({ weather, location }) => {
  if (!weather)
    return <div className="weather-card">Search for a city 🌍</div>;

  const mapping = {
    0: "Clear Sky ☀️",
    1: "Mainly Clear 🌤️",
    2: "Partly Cloudy ⛅",
    3: "Overcast ☁️",
    45: "Fog 🌫️",
    48: "Rime Fog 🌫️",
    51: "Light Drizzle 🌦️",
    61: "Rain 🌧️",
    71: "Snow ❄️",
    80: "Rain Showers 🌦️",
    95: "Thunderstorm ⛈️",
  };

  // Get current time in the searched city
  const cityTime = new Date().toLocaleTimeString("en-US", {
    timeZone: weather.timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const cityDate = new Date().toLocaleDateString("en-US", {
    timeZone: weather.timezone,
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="weather-card">
      <h2>{location}</h2>
      <h1>{weather.temperature}°C</h1>
      <p>{mapping[weather.weathercode] || "Unknown 🌈"}</p>
      <p>💨 Wind: {weather.windspeed} km/h</p>
      <p>🕓 Updated: {cityDate} | {cityTime}</p>
    </div>
  );
};

export default WeatherCard;
