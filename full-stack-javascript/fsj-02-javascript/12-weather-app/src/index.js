import "./styles.css";
import getWeatherData from "./js/getWeatherData";

const apiKey = process.env.API_KEY;

const weatherData = await getWeatherData("new york", apiKey);

console.log("Weather data is:");
console.log(weatherData);
console.log("The address passed in is:");
console.log(weatherData.address);
