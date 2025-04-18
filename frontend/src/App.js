import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
            setWeather(response.data);
        } catch (error) {
            alert("Error fetching weather data");
        }
    };

    return (
        <div className="weather-container">
            <h2>
                🌍<span>Weather App</span>
            </h2>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button onClick={fetchWeather}>Get Weather</button>

            {weather && (
                <div className="weather-info">
                    <h3>📍{weather.name}</h3>
                   
                    <div className="weather-details">
                        <div className="detail-card">
                            🌡️ <p>Temperature</p>
                            <span>{weather.main.temp}°C</span>
                        </div>
                        <div className="detail-card">
                            💧 <p>Humidity</p>
                            <span>{weather.main.humidity}%</span>
                        </div>
                        <div className="detail-card">
                            🌬️ <p>Wind Speed</p>
                            <span>{weather.wind.speed} m/s</span>
                        </div>
                        <div className="detail-card">
                            🌥️ <p>Condition</p>
                            <span>{weather.weather[0].description}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
