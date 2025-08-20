import { processedWeatherData } from "./submitLocation.js";
import convertToFahrenheit from "./convertToFahrenheit.js";
import convertToCelsius from "./convertToCelsius.js";

const fahrenheitButton = document.querySelector(".btn-fahrenheit");
const celsiusButton = document.querySelector(".btn-celsius");

fahrenheitButton.addEventListener("click", () => {
  convertToFahrenheit(processedWeatherData);
});

celsiusButton.addEventListener("click", () => {
  convertToCelsius(processedWeatherData);
});
