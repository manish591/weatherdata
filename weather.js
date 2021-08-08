const inputCity = document.querySelector('.inputcity');
const getDataBtn = document.querySelector('.getdata');
const cityName = document.querySelector('.cityname');
const weatherCondition = document.querySelector('.weathercondition');
const temperature = document.querySelector('.temperature');
const minMaxTemp = document.querySelector('.minmaxtemp')

console.log(inputCity);
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
        temperature.innerHTML = `${tempInCelcius}deg Celcius`
        minMaxTemp.innerHTML = `${placeMinTemp}/${placeMaxTemp}.`
    })
    .catch(error => {
        console.log('Error occured', error);
    })
}


getDataBtn.addEventListener('click', getWeatherData);
