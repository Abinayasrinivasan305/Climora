# 🌤️ Climora – A Smart Weather App

**Climora** is a modern, responsive weather web application built using **React (Vite)**.
It allows users to search for weather details by **city, state, or country**, displaying **real-time temperature, wind speed, and local time** using the Open-Meteo public API.

---

## 🚀 Features

* 🌍 Search weather by **city, state, or country**
* ⏰ Displays **local time** of the searched location
* 🌡️ Shows **real-time temperature**, **wind speed**, and **air quality index (AQI)**
* 🌦️ **Dynamic background images** for different weather conditions
  (e.g., clear sky, rain, fog, thunderstorm, snow)
* 💠 Sleek **Glassmorphism UI** with smooth animations
* 📱 Fully **responsive** across all devices
* ⚡ Built with **Vite + React Hooks** for performance
* 🔁 Smooth **loading spinner** during data fetching
* 🚫 Graceful **error handling** for invalid or missing locations

---

## 🧠 Tech Stack

| Technology            | Purpose                                     |
| --------------------- | ------------------------------------------- |
| **React (Vite)**      | Frontend framework                          |
| **CSS3**              | Styling (Glassmorphism + Responsive design) |
| **Open-Meteo API**    | Weather & geolocation data                  |
| **JavaScript (ES6+)** | Logic and interactivity                     |

---

## 🏗️ Project Structure

```
climora/
│
├── public/
│   ├── images/               # Background GIFs or images for weather conditions
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   └── WeatherCard.jsx
│   │
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── SearchBar.css
│   │   └── WeatherCard.css
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/Climora.git
cd Climora
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Application

```bash
npm run dev
```

Your app will be live at **[http://localhost:5173](http://localhost:5173)**

---

## ☁️ API Used

### 🗺️ Geocoding API

To fetch **latitude**, **longitude**, and **timezone** for the entered city.

```bash
https://geocoding-api.open-meteo.com/v1/search?name={city_name}&count=1&language=en&format=json
```

### 🌤️ Weather API

To get **current weather details** based on the coordinates.

```bash
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true&timezone={timezone}
```

---

## 🌈 Weather Code Mapping

| Code | Condition     | Emoji |
| ---- | ------------- | ----- |
| 0    | Clear Sky     | ☀️    |
| 1    | Mainly Clear  | 🌤️   |
| 2    | Partly Cloudy | ⛅     |
| 3    | Overcast      | ☁️    |
| 45   | Fog           | 🌫️   |
| 48   | Rime Fog      | 🌫️   |
| 51   | Light Drizzle | 🌦️   |
| 61   | Rain          | 🌧️   |
| 71   | Snow          | ❄️    |
| 80   | Rain Showers  | 🌦️   |
| 95   | Thunderstorm  | ⛈️    |

---

## 📦 Deployment

### 🚀 STEP 1: Build for Production

```bash
npm run build
```

This generates a **`dist/`** folder containing your optimized production files.

---

### 🚀 STEP 2: Deploy on CodeSandbox

1. Push your project to **GitHub** (or upload ZIP).
2. Go to **[CodeSandbox.io](https://codesandbox.io/)** → “Create Sandbox”.
3. Choose **“Import from GitHub”**.
4. Paste your repository URL and wait for it to load.
5. After it runs → click **Share → Live Link**.
6. Submit this **live link** for deployment or demo.

---

## 🧑‍💻 Developer

**👩‍💻 Abinaya Parameswari**
🎓 Final Year Computer Science Engineer @ PSNA College of Engineering and Technology
💻 Passionate about **Java Full-Stack Development** & **AI Integration**
📧 [abinayaparam@gmail.com](mailto:abinayaparam@gmail.com)
🌐 [linkedin.com/in/abinaya-parameswari](https://linkedin.com/in/abinaya-parameswari)

---

## 🪶 License

This project is open-source and available under the [MIT License](LICENSE).

---

⭐ **If you like this project, give it a star on GitHub!**

---

