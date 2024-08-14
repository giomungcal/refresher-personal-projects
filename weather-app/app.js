// moment.js package
// import moment from "moment";

const api_key = "87c1b48fdbde6f40086d401388ea700a";

const degreesLocationValue = document.getElementById("degrees-location-title");

const weatherBalloon = document.getElementById("weather-balloon");
const weatherValue = document.getElementById("weather-value");
const weatherLocation = document.getElementById("weather-location");
const humidityValue = document.getElementById("humidity-value");
const windValue = document.getElementById("wind-value");

// Search Bar elements
const searchBarForm = document.getElementById("search-bar-form");
const searchBarInput = document.getElementById("search-bar");

async function fetchWeatherData(city) {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const weatherData = await response.json();

    // Working code starts here
    const currentTemp = (weatherData.main.temp_max - 273.15).toFixed(2);
    degreesLocationValue.textContent = `${currentTemp}° ${city.toLowerCase()}`;

    weatherValue.textContent = weatherData.weather[0].description;
    weatherLocation.textContent = city.toLowerCase();
    humidityValue.textContent = `${weatherData.main.humidity}% humidity`;
    windValue.textContent = `wind speed of ${weatherData.wind.speed} km/h`;
  } catch (error) {
    console.log(`There is a fetch error: ${error}. City might be invalid.`);
    degreesLocationValue.textContent = `error 404`;
    weatherBalloon.textContent = `..zzzttt . . . bzzt   cann---ot find.. locati___ion....... ............shutting down.....`;
  }
}

// Fetch data once all HTML elements are loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchWeatherData("manila");
});

searchBarForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchWeatherData(searchBarInput.value);
  searchBarInput.value = "";
});
