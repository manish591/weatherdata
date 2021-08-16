const inputCity = document.querySelector('.inputcity');
const getDataBtn = document.querySelector('.getdata');
const cityName = document.querySelector('.cityname');
const weatherCondition = document.querySelector('.weathercondition');
const temperature = document.querySelector('.temperature');
const minMaxTemp = document.querySelector('.minmaxtemp')
const updateTime = document.querySelector('.time');
const updateLocation = document.querySelector('.location');
const greeting = document.querySelector('.greeting');

const getWeatherData = () => {
    let city = inputCity.value;
    console.log(city);
    let apiKey = 'afe67824c5fe2d1cef518fdbd64f5ac5';
    let base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(base)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let place = data.name;
        let placeWeatherCondition = data.weather[0].description;
        let placeTemp = data.main.temp;
        let placeMinTemp = data.main.temp_min;
        let placeMaxTemp = data.main.temp_max;
        
        cityName.innerHTML = place;
        weatherCondition.innerText = placeWeatherCondition;
        tempInCelcius = changeKelvinToCelcius(placeTemp);
        temperature.innerHTML = `${tempInCelcius.toFixed(2)}`
        minMaxTemp.innerHTML = `${(changeKelvinToCelcius(placeMinTemp)).toFixed(2)}/${(changeKelvinToCelcius(placeMaxTemp)).toFixed(2)}`;
        updateLocationOnClick(place);
    })
    .catch(error => {
        console.log('Error occured', error);
    })
}


getDataBtn.addEventListener('click', getWeatherData);

let hours = 0
let min = 0;

function getCurrentTime() {
    let date = new Date();
    hours = date.getHours();
    min = date.getMinutes();
    if (hours < 10) {
        hours = '0' + date.getHours();
    } 
   
    if(min < 10) {
        min = '0' + date.getMinutes();
    }

    updateTime.innerText = `${hours}:${min}`;
    updateGreetingMessage(hours);
}

setInterval(getCurrentTime, 1000);

function updateGreetingMessage(hour) {
    greeting.innerText = `${hour}`
    if (hour >= 5 && hour <= 12) {
        greeting.innerText = 'Good Morning';
    } else if (hour > 12 && hour <= 19) {
        greeting.innerText = 'Good Evening';
    } else if (hour > 19){
        greeting.innerText = 'Good Night';
    }
}

function updateLocationOnClick(change) {
    updateLocation.innerText = `${change}`;
}

function changeKelvinToCelcius(input) {
    return Number(input) - 273.15;
}