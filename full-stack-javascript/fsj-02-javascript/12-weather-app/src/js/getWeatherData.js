let oldData = null;

export default async function getWeatherData(location, apiKey) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
    );
    const result = await response.json();
    oldData = result;
    return result;
  } catch (error) {
    return oldData;
  }
}
