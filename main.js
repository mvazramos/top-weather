const baseURL = "https://api.weatherapi.com/v1"
const apiKey  = "2f201c79bcfe4992b90211353233107";
const current = "/current.json"
const forecast = "/forecast.json"
const future  = "/future.json"
const days =  document.querySelectorAll("#day");
let location = "Lisbon"
let forecastURL = `${baseURL}${forecast}?key=${apiKey}&q=${location}&days=3`

async function getWeather(url){
    fetch(url,{mode: 'cors'})
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            console
            return response.forecast.forecastday;
            
        })
        .then((response)=>{

            console.log(response[0])
            
            for (let i = 0; i < response.length; i++) {
                days[i].innerHTML=response[i].date;
                //console.log(response[i].day.maxtemp_c);
                //console.log(response[i].day.mintemp_c);
                //console.log(response[i].day.avghumidity)
                
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    
}

getWeather(forecastURL);



