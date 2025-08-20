import { Element, Image } from "./element.js";
import { format, parse } from "date-fns";

export default function displayUI(data) {
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

    const weatherImg = new Image("today-img", null).create();
    const location = new Element("h3", "location", data.address).create();
    const temp = new Element(
      "p",
      "today-temp",
      `${data.currentConditions.temp} °F`,
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
      `Feels like ${data.currentConditions.feelslike} °F`,
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

    for (let i = 1; i <= 7; i++) {
      const dayContainer = new Element("div", "day-container", null).create();
      const formattedDate = format(data.days[i].datetime, "EEEE");
      const day = new Element("p", "day", formattedDate).create();
      const icon = new Image("day-icon", null).create();
      const temp = new Element(
        "p",
        "day-temp",
        `${data.days[i].temp} °F`,
      ).create();

      dayContainer.appendChild(day);
      dayContainer.appendChild(icon);
      dayContainer.appendChild(temp);

      daysContainer.appendChild(dayContainer);
    }
  }

  function displayTodayHighlights() {
    const highlightsContainer = document.querySelector(".highlights-container");

    const titleNames = [
      "Dew",
      "UV Index",
      "Visibility",
      "Wind Direction",
      "Wind Gust",
      "Wind Speed",
    ];
    const highlightValues = [
      `${data.currentConditions.dew} °F`,
      data.currentConditions.uvindex,
      `${data.currentConditions.visibility} mi`,
      `${data.currentConditions.winddir}°`,
      `${data.currentConditions.windgust} mph`,
      `${data.currentConditions.windspeed} mph`,
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
        "highlight-value",
        highlightValues[i],
      ).create();

      highlightContainer.appendChild(title);
      highlightContainer.appendChild(value);

      highlightsContainer.appendChild(highlightContainer);
    }
  }

  displayTodayMain();
  displayNextSevenDays();
  displayTodayHighlights();
}
