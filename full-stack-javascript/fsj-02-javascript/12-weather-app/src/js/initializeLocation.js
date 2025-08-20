import getWeatherData from "./getWeatherData.js";
import processWeatherData from "./processWeatherData.js";
import displayUI from "./displayUI.js";

const apiKey = process.env.API_KEY;

const weatherData = await getWeatherData("Manila", apiKey);
const processedWeatherData = processWeatherData(weatherData);

export default function initializeLocation() {
  displayUI(processedWeatherData);
}
