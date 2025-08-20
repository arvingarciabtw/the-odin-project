export default async function getWeatherData(location, apiKey) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
  );
  const result = await response.json();
  return result;
}
