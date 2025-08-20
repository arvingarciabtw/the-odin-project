import getWeatherData from "./getWeatherData";
import processWeatherData from "./processWeatherData";

const apiKey = process.env.API_KEY;

const form = document.querySelector(".form-location");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = document.querySelector(".input-location").value;

  const weatherData = await getWeatherData(location, apiKey);
  console.log(`The original weather data is:`);
  console.log(weatherData);
  const processedWeatherData = processWeatherData(weatherData);
  console.log(`The processed weather data is:`);
  console.log(processedWeatherData);
});
