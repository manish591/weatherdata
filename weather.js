const inputCity = document.querySelector('.inputcity');
const getDataBtn = document.querySelector('.getdata');
const cityName = document.querySelector('.cityname');
const weatherCondition = document.querySelector('.weathercondition');
const temperature = document.querySelector('.temperature');
const minMaxTemp = document.querySelector('.minmaxtemp')
const updateTime = document.querySelector('.time');


const getWeatherData = () => {
    let city = inputCity.value;
    console.log(city);
    let apiKey = 'afe67824c5fe2d1cef518fdbd64f5ac5';
    let base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(base)
    .then(response => response.json())
    .then(data => {
        let place = data.name;
        let placeWeatherCondition = data.weather[0].description;
        let placeTemp = data.main.temp;
        let placeMinTemp = data.main.temp_min;
        let placeMaxTemp = data.main.temp_max;
        
        cityName.innerHTML = place;
        weatherCondition.innerText = placeWeatherCondition;
        tempInCelcius = (parseInt(placeTemp) - 273.15);
        temperature.innerHTML = `${tempInCelcius.toFixed(2)}`
        minMaxTemp.innerHTML = `${placeMinTemp}/${placeMaxTemp}.`
    })
    .catch(error => {
        console.log('Error occured', error);
    })
}


getDataBtn.addEventListener('click', getWeatherData);


function getCurrentTime() {
    let hours, min;
    let date = new Date();
    hours = date.getHours();
    min = date.getMinutes();
    if (hours < 10) {
        hours = '0' + date.getHours();
    } 
   
    if(min < 10) {
        min = '0' + date.getMinutes();
    }

    updateTime.innerText = `${hours}:${min}`
}

setInterval(getCurrentTime, 1000);