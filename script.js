const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("City-name");
const cityTime = document.getElementById("City-time");
const cityTemp = document.getElementById("City-temp");
async function getData(cityname){
 const promise= await  fetch(`https://api.weatherapi.com/v1/current.json?key=6651386af6c640be99214127251507&q=${cityname}&aqi=yes`);
   return  await promise.json();
}

button.addEventListener("click", async()=>{
const value = input.value;
 const result = await getData(value);
//  cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
cityTime.innerText =result.location.localtime;
cityTemp.innerText = result.current.temp_c ;
})

// http://api.weatherapi.com/v1/current.json?key=6651386af6c640be99214127251507&q=London&aqi=yes
