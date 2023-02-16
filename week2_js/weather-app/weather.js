// const { Navigator } = require("node-navigator");
// const navigator = new Navigator();
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const getLocation = () => {
  return new Promise(function (resolve, reject) {
    try {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve(position.coords);
      });
    } catch (e) {
      reject(new Error(e));
    }
  });
};

//Get the weather for that location
async function getWeather(coords) {
  return new Promise((resolve, reject) => {
    const apiKey = "da5d29659ff717a9a402d295c479dd44";
    const url =
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
      coords.latitude +
      "&lon=" +
      coords.longitude +
      "&apiKey=" +
      apiKey;
    const req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = function () {
      if (req.status === 200) {
        resolve(JSON.parse(req.responseText));
      } else {
        reject(new Error(req.statusText));
      }
    };
    req.send();
  });
}

const getWeatherFromLocation = async () => {
  try {
    const coords = await getLocation();
    const weather = await getWeather(coords);
    document.getElementById("weather").innerHTML = weather.main.temp;
    document.getElementById("weather").innerHTML =
      weather.main.temp +
      " " +
      weather.weather[0].description +
      " " +
      weather.name;
    // document.getElementById("weather").innerHTML = weather.name;
    console.log(weather);
  } catch (error) {
    console.log(error);
  }
};

getWeatherFromLocation();
