const api_key = "87c1b48fdbde6f40086d401388ea700a";
const city = "Thailand";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

async function fetchWeatherData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const weatherData = await response.json();
    console.log(weatherData.weather[0].main);
  } catch (error) {
    console.log(`There is a fetch error: ${error}. City might be invalid.`);
  }
}

// Fetch data once all HTML elements are loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchWeatherData();
});
