import getWeatherData from "./getWeatherData";
import processWeatherData from "./processWeatherData";
import displayUI from "./displayUI";

const apiKey = process.env.API_KEY;

const form = document.querySelector(".form-location");

let processedWeatherData = processWeatherData(
  await getWeatherData("Manila", apiKey),
);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = document.querySelector(".input-location").value;

  const weatherData = await getWeatherData(location, apiKey);
  processedWeatherData = processWeatherData(weatherData);

  console.log(processedWeatherData);

  displayUI(processedWeatherData);
  form.reset();
});

export { processedWeatherData };
