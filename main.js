// WeatherAPI config
const baseURL  = "https://api.weatherapi.com/v1"
const apiKey   = "2f201c79bcfe4992b90211353233107";
const current  = "/current.json"
const forecast = "/forecast.json"
const future   = "/future.json"

// DOM 
const days     = document.querySelectorAll("#day");
const max_temp = document.querySelectorAll("#max_temp");
const min_temp = document.querySelectorAll("#min_temp");
const humidity = document.querySelectorAll("#humidity");

// Config Display 
const MAX_DAYS=3;



async function getWeather(url){
    fetch(url,{mode: 'cors'})
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            let cityName= response.location.name
            let countrName= response.location.country
            displayLocation(`${cityName}, ${countrName}`);
            return response.forecast.forecastday;
        })
        .then((response)=>{            
            displayWeather(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    
}


function displayWeather(weatherArray){
    for (let i = 0; i < MAX_DAYS; i++) {
        days[i].innerHTML=weatherArray[i].date;
        max_temp[i].innerHTML=`${weatherArray[i].day.maxtemp_c}°C` ;
        min_temp[i].innerHTML=`${weatherArray[i].day.mintemp_c}°C` ;
        humidity[i].innerHTML=`${weatherArray[i].day.avghumidity}%` ;        
    }
}

function displayLocation(location){
    document.querySelector("#display-location").innerHTML=location;
}

function submitLocation(){
    let location = document.querySelector("#search-location").value;
    if(location!==""){
        //set location url 
        let forecastURL = `${baseURL}${forecast}?key=${apiKey}&q=${location}&days=3`
        getWeather(forecastURL);
        // clear input
        document.querySelector("#search-location").value=""; 
    }
}

function generateForecastURL(location, days){
    let url = "";
    return url
}

// addEventListener
function addListeners(){
    document.querySelector("#input-button").addEventListener("click", submitLocation);
}

// Set default location according to IP Address
let defaultLocation =`${baseURL}${forecast}?key=${apiKey}&q=auto:ip&days=3`
addListeners();
getWeather(defaultLocation);


