import React from "react";
import "./../styles/WeatherCard.css";

const WeatherCard = ({ weather, location }) => {
  if (!weather) return <div className="weather-card">Search for a city 🌍</div>;

  const weatherMapping = {
    0: { condition: "Clear Sky ☀️", note: "Perfect weather for outdoor plans." },
    1: { condition: "Mainly Clear 🌤️", note: "Bright and cheerful day!" },
    2: { condition: "Partly Cloudy ⛅", note: "Pleasant day — a few clouds." },
    3: { condition: "Overcast ☁️", note: "Cloudy, calm and cozy." },
    45: { condition: "Fog 🌫️", note: "Drive carefully — low visibility." },
    48: { condition: "Rime Fog 🌫️", note: "Icy fog — stay warm indoors." },
    51: { condition: "Light Drizzle 🌦️", note: "Umbrella advised." },
    61: { condition: "Rain 🌧️", note: "Cozy weather for coffee ☕" },
    71: { condition: "Snow ❄️", note: "Bundle up and enjoy the snow!" },
    80: { condition: "Rain Showers 🌦️", note: "Intermittent rain expected." },
    95: { condition: "Thunderstorm ⛈️", note: "Stay indoors during lightning." },
  };

  const info = weatherMapping[weather.weathercode] || { condition: "N/A", note: "" };

  const cityTime = new Date().toLocaleTimeString("en-US", {
    timeZone: weather.timezone,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="weather-card glass">
      <h2>{location}</h2>
      <h1>{weather.temperature}°C</h1>
      <p className="weather-condition">{info.condition}</p>
      <p className="weather-note">{info.note}</p>

      <div className="extra-stats">
        <p>🌬️ Wind: {weather.windspeed} km/h</p>
        <p>🫧 AQI: {weather.aqi}</p>
      </div>

      <p>🕓 Local Time: {cityTime}</p>
    </div>
  );
};

export default WeatherCard;
