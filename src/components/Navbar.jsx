import React, { useEffect, useState } from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  const [city, setCity] = useState("Detecting...");
  const [temp, setTemp] = useState("--");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (pos) => {
          const { latitude, longitude } = pos.coords;

          const geoRes = await fetch(
            `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`
          );
          const geoData = await geoRes.json();

          const location =
            geoData.address.city ||
            geoData.address.town ||
            geoData.address.village ||
            "Unknown";

          setCity(location);

          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
          );
          const data = await res.json();
          setTemp(data.current_weather.temperature);
        });
      } catch (error) {
        console.error(error);
        setCity("Location error");
      }
    };
    fetchWeather();
  }, []);

  return (
    <nav className="navbar">
      <h1 className="climora-logo text-4xl">Climora</h1>
      <div className="nav-weather">
        <span>{city}</span>
        <span>{temp !== "--" ? `${temp}°C` : "--"}</span>
      </div>
    </nav>
  );
};

export default Navbar;
