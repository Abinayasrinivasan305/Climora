# 🌤️ Climora – A Smart Weather App

**Climora** is a modern, responsive weather web application built using **React (Vite)**.  
It allows users to search for weather details by **city, state, or country**, displaying **real-time temperature, wind speed, and local time** using the Open-Meteo public API.  

---

## 🚀 Features

- 🌍 Search weather by **city, state, or country**
- ⏰ Shows **local time** of the searched location
- 🧭 Displays **temperature, wind speed, and weather condition**
- 🌦️ **Dynamic backgrounds** based on weather condition (clear, rain, fog, thunderstorm, etc.)
- 💠 **Glassmorphism UI** design for an aesthetic feel
- 📱 Fully **responsive** for all screen sizes
- ⚡ Built with **Vite + React Hooks**
- 🔁 Smooth **loading spinner** while fetching data
- 🚫 Graceful **error handling** for invalid locations

---

## 🧠 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React (Vite)** | Frontend framework |
| **CSS3** | Styling (Glassmorphism & Responsive Design) |
| **Open-Meteo API** | Weather and geolocation data |
| **JavaScript (ES6+)** | Logic and interactivity |

---

## 🏗️ Project Structure

```

weather-now/
│
├── public/
│   ├── images/              # Weather background images
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   └── WeatherCard.jsx
│   │
│   ├── App.jsx
│   ├── App.css              # Common styles
│   ├── styles/
|   |   |__ Navbar.css
│   │   ├── searchbar.css
│   │   └── weathercard.css
│   └── main.jsx
│
├── package.json
└── README.md


````

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/AbinayaWeatherExplorer.git
cd AbinayaWeatherExplorer
````

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

**Geocoding API** → to fetch latitude, longitude, and timezone

```
https://geocoding-api.open-meteo.com/v1/search?name={city_name}&count=1&language=en&format=json
```

**Weather API** → to get current weather based on coordinates

```
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true&timezone={timezone}
```

---

## 📦 Deployment

### 🚀 STEP 1: Build for Production

Run this command to generate the optimized build:

```bash
npm run build
```

This will create a `dist` folder containing your production-ready files.

---

### 🚀 STEP 2: Deploy on **CodeSandbox**

After saving `README.md` in VS Code:

1. Push your project to **GitHub** (or zip it).
2. Go to **[CodeSandbox.io](https://codesandbox.io/)** → “Create Sandbox”.
3. Choose **“Import from GitHub”**.
4. Paste your repo URL → CodeSandbox will automatically load and deploy it.
5. Once it runs successfully → click **Share → Live Link**.
6. That live link is what you’ll submit for **Level 2**.

---

## 🧑‍💻 Developer

**Abinaya Parameswari**
🎓 Final Year Computer Science Engineer @ PSNA College of Engineering and Technology
💻 Passionate about Java Full-Stack Development & AI Integration
📧 Email: [abinayaparam@gmail.com](mailto:abinayaparam@gmail.com)
🌐 LinkedIn: [linkedin.com/in/abinaya-parameswari](https://linkedin.com/in/abinaya-parameswari)

---

## 🪶 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you like this project, don’t forget to give it a star!**

```
