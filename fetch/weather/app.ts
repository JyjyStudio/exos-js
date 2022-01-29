const api_key = "";

//city
let cityNameDiv = <HTMLElement>document.getElementById('cityName');
let cityNameContent = <HTMLElement>document.createElement('p');
cityNameContent.setAttribute('id', 'cityName');
//temperature
let temperatureDiv = <HTMLElement>document.getElementById('temperature');
let temperatureIcon = <HTMLElement>document.createElement('p');
temperatureIcon.innerHTML = '<img src="img/temperature.png" width=50>';
temperatureDiv.appendChild(temperatureIcon);
let temperature = document.createElement('div');
//humidity
let humidityDiv = <HTMLElement>document.getElementById('humidity');
let humidityIcon = <HTMLElement>document.createElement('p');
humidityIcon.innerHTML = '<img src="img/humidity.png" width=50>';
humidityDiv.appendChild(humidityIcon);
let humidity = document.createElement('div');
//wind
let windDiv = <HTMLElement>document.getElementById('wind');
let windIcon = <HTMLElement>document.createElement('p');
windIcon.innerHTML = '<img src="img/wind.png" width=50>';
windDiv.appendChild(windIcon);
let wind = document.createElement('div');

//Interface
interface Meteo {
    name : string,
    main : {
        temp : string,
        humidity : string,
    },
    wind : {speed : string}
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
            cityNameContent.textContent = data.name;
            cityNameDiv.appendChild(cityNameContent);
            //temperature
            temperature.textContent = `${data.main.temp} °C`;
            temperatureDiv.appendChild(temperature);
            //humidity
            humidity.textContent = `${data.main.humidity} %`;
            humidityDiv.appendChild(humidity);
            //wind
            wind.textContent = `${data.wind.speed} Km/h`;
            windDiv.appendChild(wind);
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
    console.log(cityAsked);
    getLocalWeather(undefined, cityAsked);
});