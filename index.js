const API_KEY = "d184b04a6e8014aa0c247e97cb80dc05"
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`

function handleFormSubmit(event) {
  event.preventDefault();
  let city = document.getElementById("city").value;
  getWeatherFromApi(city);
  getForecastFromApi(city);
}

function getWeatherFromApi(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=" + API_KEY)
  .then(response => response.json())
  .then(displayWeather);
}

function displayWeather(weatherJson) {
  let temp = weatherJson.main.temp;
  let tempRow = document.getElementById("temp");
  let lowTemp = weatherJson.main.temp_min;
  let lowTempRow = document.getElementById("low");
  let highTemp = weatherJson.main.temp_max;
  let highTempRow = document.getElementById("high");
  let humidity = weatherJson.main.humidity;
  let humidityRow = document.getElementById("humidity");
  let cloudCover = weatherJson.clouds.all;
  let cloudCoverRow = document.getElementById("cloudCover");
  tempRow.innerHTML = temp;
  lowTempRow.innerHTML = lowTemp;
  highTempRow.innerHTML = highTemp;
  humidityRow.innerHTML = humidity;
  cloudCoverRow.innerHTML = cloudCover;
  
}

function getForecastFromApi(city) {
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&APPID=" + API_KEY)
  .then(response => response.json())
  .then(displayForecast)
}

function displayForecast(forecastJson) {
  let getDate = new Date();
  let getDay = getDate.getDay();
  let firstDay = forecastJson.list[0].main.temp;
  let firstDayRow = document.getElementById("day-one");
  let secondDay = forecastJson.list[1].main.temp;
  let secondDayRow = document.getElementById("day-two");
  let thirdDay = forecastJson.list[2].main.temp;
  let thirdDayRow = document.getElementById("day-three");
  let fourthDay = forecastJson.list[3].main.temp;
  let fourthDayRow = document.getElementById("day-four");
  let lastDay = forecastJson.list[4].main.temp;
  let lastDayRow = document.getElementById("day-five");
  let twoDaysOutTitle = document.getElementByID("two-days-out");
  firstDayRow.innerHTML = firstDay;
  secondDayRow.innerHTML = secondDay;
  thirdDayRow.innerHTML = thirdDay;
  fourthDayRow.innerHTML = fourthDay;
  lastDayRow.innerHTML = lastDay;
  twoDaysOutTitle.innerHTML = getDay;
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  let cityForm = document.getElementById("cityForm");
  cityForm.addEventListener("submit", handleFormSubmit);
})
