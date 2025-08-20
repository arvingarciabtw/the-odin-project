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

export default function setIcon(data) {
  let src = null;

  if (data.currentConditions.icon === "clear-day") {
    src = clearDay;
  } else if (data.currentConditions.icon === "clear-night") {
    src = clearNight;
  } else if (
    data.currentConditions.icon === "cloudy" ||
    data.currentConditions.icon === "partly-cloudy-day"
  ) {
    src = cloudyDay;
  } else if (data.currentConditions.icon === "partly-cloudy-night") {
    src = cloudyNight;
  } else if (data.currentConditions.icon === "fog") {
    src = fog;
  } else if (
    data.currentConditions.icon === "rain" ||
    data.currentConditions.icon === "showers-day" ||
    data.currentConditions.icon === "showers-night"
  ) {
    src = rain;
  } else if (
    data.currentConditions.icon === "thunder-rain" ||
    data.currentConditions.icon === "thunder-showers-day" ||
    data.currentConditions.icon === "thunder-showers-night"
  ) {
    src = thunder;
  } else if (
    data.currentConditions.icon === "snow" ||
    data.currentConditions.icon === "snow-showers-day" ||
    data.currentConditions.icon === "snow-showers-night"
  ) {
    src = snow;
  } else if (data.currentConditions.icon === "wind") {
    src = wind;
  }

  return src;
}
