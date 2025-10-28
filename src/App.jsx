import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar"; // ✅ ensure using your component
import "./App.css";

const App = () => {
  const [city, setCity] = useState("Bengaluru");
  const [weather, setWeather] = useState(null);
  const [background, setBackground] = useState("/images/default.jpg");
  const [loading, setLoading] = useState(false); // ✅ new state for loading

  // Fetch weather details for the entered city
  const fetchWeather = async (cityName) => {
    try {
      setLoading(true); // ✅ start loading
      setWeather(null);

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        alert("Location not found! Please enter a valid city, state, or country.");
        setLoading(false);
        return;
      }

      const { latitude, longitude, timezone, name, country, admin1 } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=${timezone}`
      );
      const weatherData = await weatherRes.json();

      if (weatherData.current_weather) {
        setWeather({
          ...weatherData.current_weather,
          timezone,
          location: `${name}${admin1 ? ", " + admin1 : ""}, ${country}`,
        });
        updateBackground(weatherData.current_weather.weathercode);
      }

      setLoading(false); // ✅ stop loading
    } catch (error) {
      console.error("Error fetching weather:", error);
      setLoading(false);
    }
  };

  // Set background based on weather code
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

  // Default city weather on load
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

      <div className="weather-container">
        <SearchBar onSearch={handleSearch} />

        {/* ✅ Loading Spinner */}
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
