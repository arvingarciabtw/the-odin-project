const fahrenheitButton = document.querySelector(".btn-fahrenheit");
const celsiusButton = document.querySelector(".btn-celsius");

export default function convertToCelsius(processedWeatherData) {
  const todayTemp = document.querySelector(".today-temp");
  const todayFeelsLike = document.querySelector(".today-feels-like");
  const dew = document.querySelector(".dew");

  const allDayTemps = document.querySelectorAll(".day-temp");

  if (celsiusButton.classList.contains("active")) {
    return;
  }

  celsiusButton.classList.add("active");
  fahrenheitButton.classList.remove("active");

  function convert(fahrenheit) {
    return ((5 / 9) * (fahrenheit - 32)).toFixed(1);
  }

  const convertedTodayTemp = convert(
    processedWeatherData.currentConditions.temp,
  );
  const convertedTodayFeelsLike = convert(
    processedWeatherData.currentConditions.feelslike,
  );
  const convertedDew = convert(processedWeatherData.currentConditions.dew);

  allDayTemps.forEach((dayTemp, index) => {
    const convertedDayTemp = convert(processedWeatherData.days[index + 1].temp);
    dayTemp.textContent = `${convertedDayTemp} °C`;
  });

  todayTemp.textContent = `${convertedTodayTemp} °C`;
  todayFeelsLike.textContent = `${convertedTodayFeelsLike} °C`;
  dew.textContent = `${convertedDew} °C`;
}
