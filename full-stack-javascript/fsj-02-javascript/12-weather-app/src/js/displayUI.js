import { Element, Image } from "./element.js";
import { format, parse } from "date-fns";
import setIcon from "./setIcon.js";
import setIconsForWeek from "./setIconsForWeek.js";

export default function displayUI(data) {
  function getCurrentTempUnit() {
    const celsiusButton = document.querySelector(".btn-celsius");
    return celsiusButton && celsiusButton.classList.contains("active")
      ? "celsius"
      : "fahrenheit";
  }

  function formatTemp(tempF, unit = getCurrentTempUnit()) {
    if (unit === "celsius") {
      const tempC = ((5 / 9) * (tempF - 32)).toFixed(1);
      return `${tempC} °C`;
    }
    return `${tempF} °F`;
  }

  function displayTodayMain() {
    const topDiv = document.querySelector("aside div.top");
    const bottomDiv = document.querySelector("aside div.bottom");

    topDiv.innerHTML = "";
    bottomDiv.innerHTML = "";

    const dateAndTimeContainer = new Element(
      "div",
      "date-and-time-container",
      null,
    ).create();

    const src = setIcon(data);

    const weatherImg = new Image("today-img", src).create();

    const location = new Element("h3", "location", data.address).create();
    const temp = new Element(
      "p",
      "today-temp",
      formatTemp(data.currentConditions.temp),
    ).create();

    const formattedDate = format(data.days[0].datetime, "EE, MMMM dd");
    const date = new Element("p", "today-date", formattedDate).create();

    const parsedTime = parse(
      data.currentConditions.datetime,
      "HH:mm:ss",
      new Date(),
    );
    const standardTime = format(parsedTime, "h:mm a");
    const time = new Element("p", "today-time", standardTime).create();
    const conditions = new Element(
      "p",
      "today-conditions",
      data.currentConditions.conditions,
    ).create();
    const feelsLike = new Element(
      "p",
      "today-feels-like",
      `Feels like ${formatTemp(data.currentConditions.feelslike)}`,
    ).create();
    const humidity = new Element(
      "p",
      "today-humidity",
      `Humidity is ${data.currentConditions.humidity}%`,
    ).create();

    topDiv.appendChild(weatherImg);
    topDiv.appendChild(location);
    topDiv.appendChild(temp);
    topDiv.appendChild(dateAndTimeContainer);

    dateAndTimeContainer.appendChild(date);
    dateAndTimeContainer.appendChild(time);

    bottomDiv.appendChild(conditions);
    bottomDiv.appendChild(feelsLike);
    bottomDiv.appendChild(humidity);
  }

  function displayNextSevenDays() {
    const daysContainer = document.querySelector(".days-container");
    daysContainer.innerHTML = "";

    for (let i = 1; i <= 7; i++) {
      const dayContainer = new Element("div", "day-container", null).create();
      const formattedDate = format(data.days[i].datetime, "EEEE");
      const day = new Element("p", "day", formattedDate).create();

      const src = setIconsForWeek(data, i);

      const icon = new Image("day-icon", src).create();
      const temp = new Element(
        "p",
        "day-temp",
        formatTemp(data.days[i].temp),
      ).create();

      dayContainer.appendChild(day);
      dayContainer.appendChild(icon);
      dayContainer.appendChild(temp);

      daysContainer.appendChild(dayContainer);
    }
  }

  function displayTodayHighlights() {
    const highlightsContainer = document.querySelector(".highlights-container");
    highlightsContainer.innerHTML = "";

    const titleNames = [
      "Dew",
      "UV Index",
      "Visibility",
      "Wind Direction",
      "Wind Gust",
      "Wind Speed",
    ];
    const highlightValues = [
      formatTemp(data.currentConditions.dew),
      data.currentConditions.uvindex,
      `${data.currentConditions.visibility} mi`,
      `${data.currentConditions.winddir}°`,
      `${data.currentConditions.windgust} mph`,
      `${data.currentConditions.windspeed} mph`,
    ];
    const classNames = [
      "dew",
      "uv-index",
      "visibility",
      "wind-direction",
      "wind-gust",
      "wind-speed",
    ];

    for (let i = 0; i < 6; i++) {
      const highlightContainer = new Element(
        "div",
        "highlight-container",
        null,
      ).create();
      const title = new Element(
        "h5",
        "highlight-title",
        titleNames[i],
      ).create();
      const value = new Element(
        "p",
        classNames[i],
        highlightValues[i],
      ).create();
      value.classList.add("highlight-value");

      highlightContainer.appendChild(title);
      highlightContainer.appendChild(value);

      highlightsContainer.appendChild(highlightContainer);
    }
  }

  displayTodayMain();
  displayNextSevenDays();
  displayTodayHighlights();
}
