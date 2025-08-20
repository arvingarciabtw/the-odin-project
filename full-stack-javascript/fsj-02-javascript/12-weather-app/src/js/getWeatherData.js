let oldData = null;

export default async function getWeatherData(location, apiKey) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: apiKey }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    oldData = result;
    return result;
  } catch (error) {
    console.error("Weather fetch failed:", error.message);
    return oldData;
  }
}
