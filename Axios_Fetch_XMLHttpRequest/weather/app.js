"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const api_key = "8266633b5adb2bad0058d3dc22e2adbc";
let cityNameDiv = document.getElementById('cityName');
let temperatureDiv = document.getElementById('temperature');
temperatureDiv.innerHTML = '<img src="img/temperature.png" width=50>';
let humidityDiv = document.getElementById('humidity');
humidityDiv.innerHTML = '<img src="img/humidity.png" width=50>';
let windDiv = document.getElementById('wind');
windDiv.innerHTML = '<img src="img/wind.png" width=50>';
const getLocalWeather = (position, city) => __awaiter(void 0, void 0, void 0, function* () {
    let longitude = position === null || position === void 0 ? void 0 : position.coords.longitude;
    let latitude = position === null || position === void 0 ? void 0 : position.coords.latitude;
    let url = position ? `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=fr&appid=${api_key}` : `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${api_key}`;
    try {
        let result = yield fetch(url);
        if (result.ok) {
            let data = yield result.json();
            cityNameDiv.textContent = data.name;
            temperatureDiv.textContent = `${data.main.temp} °C`;
            humidityDiv.textContent = `${data.main.humidity} %`;
            windDiv.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
            let container = document.getElementById('container');
            if (data.main.temp > 20)
                container.style.background = "url(img/sun.png) no-repeat center center fixed";
            else if (data.main.temp < 0)
                container.style.background = "url(img/snow.jpg) no-repeat center center fixed";
            else if (data.weather[0].main == 'Clouds')
                container.style.background = "url(img/cloud.png) no-repeat center center fixed";
            else
                container.style.background = "url(img/default.jpg) no-repeat center center fixed";
        }
        else {
            throw 'Veuillez taper un nom de ville existant.';
        }
    }
    catch (e) {
        alert(e);
    }
});
navigator.geolocation.getCurrentPosition(getLocalWeather, (error) => {
    console.log(error);
    alert(`${error.message}\nVeuillez activer la géolocalisation.`);
});
let formulaire = document.getElementById('form');
let citySearch = document.getElementById('citySearch');
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    let cityAsked = citySearch.value;
    getLocalWeather(undefined, cityAsked);
});
