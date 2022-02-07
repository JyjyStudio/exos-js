const api_key = "8266633b5adb2bad0058d3dc22e2adbc";

//city
let cityNameDiv = <HTMLElement>document.getElementById('cityName');
//temperature
let temperatureDiv = <HTMLElement>document.getElementById('temperature');
temperatureDiv.innerHTML = '<img src="img/temperature.png" width=50>';
//humidity
let humidityDiv = <HTMLElement>document.getElementById('humidity');
humidityDiv.innerHTML = '<img src="img/humidity.png" width=50>';
//wind
let windDiv = <HTMLElement>document.getElementById('wind');
windDiv.innerHTML = '<img src="img/wind.png" width=50>';

//Interface
interface Meteo {
    name : string,
    main : {
        temp : number,
        humidity : number,
    },
    wind : {speed : number},
    weather : [{main : string}]
}

//fetch local weather
const getLocalWeather = async (position?:GeolocationPosition, city?:string) => {
    let longitude = position?.coords.longitude;
    let latitude = position?.coords.latitude;
    let url = position? `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=fr&appid=${api_key}` : `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${api_key}`;
    try{
        let result = await fetch(url);
        if(result.ok) {
            let data:Meteo = await result.json();
            cityNameDiv.textContent = data.name;
            //temperature
            temperatureDiv.textContent = `${data.main.temp} °C`;
            //humidity
            humidityDiv.textContent = `${data.main.humidity} %`;
            //wind
            windDiv.textContent = `${Math.round(data.wind.speed*3.6)} km/h`;
            //changement de background en fonction de la temperature
            let container = document.getElementById('container') as HTMLElement;
            if(data.main.temp > 20) container.style.background = "url(img/sun.png) no-repeat center center fixed" 
            else if(data.main.temp < 0) container.style.background = "url(img/snow.jpg) no-repeat center center fixed" 
            else if(data.weather[0].main == 'Clouds') container.style.background = "url(img/cloud.png) no-repeat center center fixed" 
            else container.style.background = "url(img/default.jpg) no-repeat center center fixed" 
        }else {throw 'Veuillez taper un nom de ville existant.'}
    } catch(e) {alert(e)}
}

//Recuperation de la geolocalisation
navigator.geolocation.getCurrentPosition(getLocalWeather, (error) => {
    console.log(error);
    alert(`${error.message}\nVeuillez activer la géolocalisation.`);
});

//fetch asked weather
let formulaire = document.getElementById('form') as HTMLFormElement;
let citySearch = document.getElementById('citySearch') as HTMLInputElement;
formulaire.addEventListener('submit', (e)=>{
    e.preventDefault();
    let cityAsked = citySearch.value
    getLocalWeather(undefined, cityAsked);
});