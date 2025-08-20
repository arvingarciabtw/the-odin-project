const fahrenheitButton = document.querySelector(".btn-fahrenheit");
const celsiusButton = document.querySelector(".btn-celsius");

export default function convertToFahrenheit(processedWeatherData) {
  const todayTemp = document.querySelector(".today-temp");
  const todayFeelsLike = document.querySelector(".today-feels-like");
  const dew = document.querySelector(".dew");

  const allDayTemps = document.querySelectorAll(".day-temp");

  if (fahrenheitButton.classList.contains("active")) {
    return;
  }

  fahrenheitButton.classList.add("active");
  celsiusButton.classList.remove("active");

  function convertToCelsius(fahrenheit) {
    return ((5 / 9) * (fahrenheit - 32)).toFixed(1);
  }

  function convertToFahrenheit(celsius) {
    return (celsius * 1.8 + 32).toFixed(1);
  }

  const convertedTodayTemp = convertToFahrenheit(
    convertToCelsius(processedWeatherData.currentConditions.temp),
  );
  const convertedTodayFeelsLike = convertToFahrenheit(
    convertToCelsius(processedWeatherData.currentConditions.feelslike),
  );
  const convertedDew = convertToFahrenheit(
    convertToCelsius(processedWeatherData.currentConditions.dew),
  );

  allDayTemps.forEach((dayTemp, index) => {
    const convertedDayTemp = convertToFahrenheit(
      convertToCelsius(processedWeatherData.days[index + 1].temp),
    );
    dayTemp.textContent = `${convertedDayTemp} °F`;
  });

  todayTemp.textContent = `${convertedTodayTemp} °F`;
  todayFeelsLike.textContent = `${convertedTodayFeelsLike} °F`;
  dew.textContent = `${convertedDew} °F`;
}
