export default function processWeatherData(weatherData) {
  const neededData = ["address", "currentConditions", "days"];

  const processedWeatherData = Object.keys(weatherData)
    .filter((key) => neededData.includes(key))
    .reduce((obj, key) => {
      obj[key] = weatherData[key];
      return obj;
    }, {});

  return processedWeatherData;
}
