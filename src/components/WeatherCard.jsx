import React from "react";
import "./../styles/WeatherCard.css";

const WeatherCard = ({ weather, location }) => {
  if (!weather)
    return <div className="weather-card">Search for a city 🌍</div>;

  // ✅ Mapping of weather codes to conditions and notes
  const weatherMapping = {
    0: { 
      condition: "Clear Sky ☀️", 
      note: "The weather is perfect! Great time to plan your outdoor activities. 🌞" 
    },
    1: { 
      condition: "Mainly Clear 🌤️", 
      note: "A bright and pleasant day ahead — enjoy your time outdoors!" 
    },
    2: { 
      condition: "Partly Cloudy ⛅", 
      note: "Some clouds, but still a good day to go out. Keep an eye on the sky!" 
    },
    3: { 
      condition: "Overcast ☁️", 
      note: "Sky is cloudy, but you can still enjoy a peaceful walk." 
    },
    45: { 
      condition: "Fog 🌫️", 
      note: "Low visibility — drive carefully and avoid outdoor travel early morning." 
    },
    48: { 
      condition: "Rime Fog 🌫️", 
      note: "Fog with ice — better to stay warm indoors and wait till it clears." 
    },
    51: { 
      condition: "Light Drizzle 🌦️", 
      note: "Carry an umbrella just in case — light drizzle expected." 
    },
    61: { 
      condition: "Rain 🌧️", 
      note: "Rainy weather — perfect for coffee and indoor plans ☕." 
    },
    71: { 
      condition: "Snow ❄️", 
      note: "Snowy and cold — stay cozy or enjoy a snow walk if you love it!" 
    },
    80: { 
      condition: "Rain Showers 🌦️", 
      note: "Intermittent rain — take an umbrella when heading out." 
    },
    95: { 
      condition: "Thunderstorm ⛈️", 
      note: "Thunderstorm alert — stay indoors and avoid travel!" 
    },
  };

  // ✅ Get weather details safely
  const weatherCode = weather.weathercode;
  const weatherInfo = weatherMapping[weatherCode] || { condition: "Unknown 🌈", note: "" };

  // ✅ Get current city time and date
  const cityTime = new Date().toLocaleTimeString("en-US", {
    timeZone: weather.timezone,
    hour: "2-digit",
    minute: "2-digit",
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
      <p className="weather-condition">{weatherInfo.condition}</p>
      <p className="weather-note">{weatherInfo.note}</p>
      <p>💨 Wind: {weather.windspeed} km/h</p>
      <p>🕓 Updated: {cityDate} | {cityTime}</p>
    </div>
  );
};

export default WeatherCard;
