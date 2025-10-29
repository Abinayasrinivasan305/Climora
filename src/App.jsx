import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import Notification from "./components/Notification";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("Bengaluru");
  const [weather, setWeather] = useState(null);
  const [background, setBackground] = useState("/images/default.jpg");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const [isDark, setIsDark] = useState(false);

  const weatherNotes = {
    0: "☀️ Clear sky — perfect for outdoor plans!",
    1: "🌤️ Mainly clear — enjoy a bright day!",
    2: "⛅ Partly cloudy — pleasant and calm.",
    3: "☁️ Overcast — cozy indoors weather.",
    45: "🌫️ Fog — drive carefully!",
    48: "🌫️ Rime fog — stay warm.",
    51: "🌦️ Light drizzle — umbrella ready!",
    61: "🌧️ Rain — perfect coffee time ☕",
    71: "❄️ Snow — enjoy the chill!",
    80: "🌦️ Rain showers — quick drizzle ahead!",
    95: "⛈️ Thunderstorm — stay indoors!",
  };

  // 🌦️ Fetch weather data
  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setWeather(null);

      // 1️⃣ Get coordinates from city name
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          cityName
        )}&count=1&language=en&format=json`
      );
      const geoData = await geoRes.json();

      if (!geoData.results?.length) {
        setNotification("⚠️ City not found! Try another one.");
        setLoading(false);
        return;
      }

      const { latitude, longitude, timezone, name, country, admin1 } =
        geoData.results[0];

      // 2️⃣ Fetch weather + AQI
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=${timezone}`
      );
      const weatherData = await weatherRes.json();

      let airData = null;
      try {
        const airRes = await fetch(
          `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=european_aqi`
        );
        airData = await airRes.json();
      } catch (err) {
        console.warn("AQI unavailable:", err);
      }

      if (weatherData.current_weather) {
        const current = weatherData.current_weather;

        const details = {
          windspeed: current.windspeed,
          aqi: airData?.current?.european_aqi ?? "N/A",
        };

        setWeather({
          ...current,
          ...details,
          timezone,
          location: `${name}${admin1 ? ", " + admin1 : ""}, ${country}`,
        });

        updateBackground(current.weathercode);
        setIsDark(!current.is_day); // auto day/night
        setNotification(weatherNotes[current.weathercode] || "🌈 Weather updated!");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setNotification("⚠️ Error fetching data. Please try again later.");
      setLoading(false);
    }
  };

  // 🌅 Background update
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
      className={`app-container ${isDark ? "dark-mode" : ""}`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        transition: "background-image 0.6s ease-in-out",
        overflow: "hidden",
      }}
    >
      <Navbar />


      {/* Notification Toast */}
      <Notification message={notification} onClose={() => setNotification("")} />

      {/* Main Weather Section */}
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
