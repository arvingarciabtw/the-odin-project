import {
  clearDay,
  clearNight,
  cloudyDay,
  cloudyNight,
  fog,
  rain,
  snow,
  thunder,
  wind,
} from "./icons.js";

export default function setIconsForWeek(data, index) {
  let src = null;

  if (data.days[index].icon === "clear-day") {
    src = clearDay;
  } else if (data.days[index].icon === "clear-night") {
    src = clearNight;
  } else if (
    data.days[index].icon === "cloudy" ||
    data.days[index].icon === "partly-cloudy-day"
  ) {
    src = cloudyDay;
  } else if (data.days[index].icon === "partly-cloudy-night") {
    src = cloudyNight;
  } else if (data.days[index].icon === "fog") {
    src = fog;
  } else if (
    data.days[index].icon === "rain" ||
    data.days[index].icon === "showers-day" ||
    data.days[index].icon === "showers-night"
  ) {
    src = rain;
  } else if (
    data.days[index].icon === "thunder-rain" ||
    data.days[index].icon === "thunder-showers-day" ||
    data.days[index].icon === "thunder-showers-night"
  ) {
    src = thunder;
  } else if (
    data.days[index].icon === "snow" ||
    data.days[index].icon === "snow-showers-day" ||
    data.days[index].icon === "snow-showers-night"
  ) {
    src = snow;
  } else if (data.days[index].icon === "wind") {
    src = wind;
  }

  return src;
}
