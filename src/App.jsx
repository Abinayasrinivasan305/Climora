import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import Notification from "./components/Notification"; // ✅ NEW
import "./App.css";

const App = () => {
  const [city, setCity] = useState("Bengaluru");
  const [weather, setWeather] = useState(null);
  const [background, setBackground] = useState("/images/default.jpg");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(""); // ✅ new state

  const weatherNotes = {
    0: "☀️ Clear sky — perfect weather to plan outdoor activities!",
    1: "🌤️ Mainly clear — enjoy a bright day outside!",
    2: "⛅ Partly cloudy — still pleasant for a walk.",
    3: "☁️ Overcast — calm day for reading indoors.",
    45: "🌫️ Fog — drive carefully, visibility is low.",
    48: "🌫️ Rime fog — stay warm, icy conditions ahead.",
    51: "🌦️ Light drizzle — keep an umbrella handy!",
    61: "🌧️ Rain — perfect for cozy indoor plans ☕",
    71: "❄️ Snow — bundle up and stay cozy!",
    80: "🌦️ Rain showers — umbrella recommended!",
    95: "⛈️ Thunderstorm alert — stay indoors!",
  };

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setWeather(null);

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
      );
      const geoData = await geoRes.json();

      if (!geoData.results?.length) {
        setNotification("⚠️ City not found! Please try another one.");
        setLoading(false);
        return;
      }

      const { latitude, longitude, timezone, name, country, admin1 } = geoData.results[0];
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=${timezone}`
      );
      const weatherData = await weatherRes.json();

      if (weatherData.current_weather) {
        const data = weatherData.current_weather;
        setWeather({
          ...data,
          timezone,
          location: `${name}${admin1 ? ", " + admin1 : ""}, ${country}`,
        });
        updateBackground(data.weathercode);
        setNotification(weatherNotes[data.weathercode] || "🌈 Weather updated successfully!");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setNotification("⚠️ Error fetching data. Please try again later.");
      setLoading(false);
    }
  };

  const updateBackground = (code) => {
    const images = {
      0: "/images/clearsky.gif",
      1: "/images/mainlyclearsky.jpg",
      2: "/images/partlyclear.gif",
      3: "/images/overcast.gif",
      45: "/images/fog.gif",
      48: "/images/rimefog.gif",
      51: "/images/lightdrizzle.png",
      61: "/images/rain.gif",
      71: "/images/snow.gif",
      80: "/images/rainshowers.gif",
      95: "/images/thunderstorm.gif",
    };
    setBackground(images[code] || "/images/default.gif");
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
  };

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        transition: "background-image 0.6s ease-in-out",
      }}
    >
      <Navbar />
      <Notification message={notification} onClose={() => setNotification("")} /> {/* ✅ Toast */}
      <div className="weather-container">
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
            <p>Fetching latest weather...</p>
          </div>
        ) : (
          <WeatherCard weather={weather} location={weather?.location} />
        )}
      </div>
    </div>
  );
};

export default App;
