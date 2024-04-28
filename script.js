let cities = [
    {name : "Brno", status : "čistá obloha", temperature : 15},
    {name : "Podbořany", status : "oblačno", temperature : 7},
    {name : "Praha", status : "oblačno", temperature : 9},
    {name : "Karlovy Vary", status : "prší", temperature : 2},
    {name : "Ostrava", status : "sněží", temperature : -3},
    {name : "Chomutov", status : "prší", temperature : 4},
    {name : "Boskovice", status : "čistá obloha", temperature : 12},
    {name : "Bratislava", status : "slunečno", temperature : 18}
]

function getObjectArray(){
    for(city in cities){
        document.getElementById("output").innerHTML += cities[city].name + ","
    }
}

function initializeCitySelect(){
    const citySelect = document.getElementById("city-select");
    cities.forEach(city =>{
        const option = document.createElement("option");
        option.text = city.name;
        citySelect.add(option);
    });
}

function displayWeather(){
    const selectedCity = document.getElementById("city-select").value;
    const weatherInfo = document.getElementById("weather-info")
    const city = cities.find(city => city.name === selectedCity);

    if(city){
        weatherInfo.innerHTML = `<p>Počasí v ${city.name}: ${city.status}, teplota: ${city.temperature}°C</p>`;
    }
}

function updateWeather(){
    setTimeout(() => {
        alert("Aktualizovali jsme pro tebe data!")
    }, 1000);
}
function getMostHottestCity(){

    let mostHottestCity = {name:"", temperature:0, status:""}

    for(city in cities){
        if(cities[city].temperature > mostHottestCity.temperature){
            mostHottestCity = cities[city]
        }
    }

    document.getElementById("hottestOutput").innerHTML ="Jméno Města:"+ " " + mostHottestCity.name + " , " + "Počasí:"+ " " + mostHottestCity.status + " , " + "Teplota:" + "  " + mostHottestCity.temperature
}

window.onload = function(){
    initializeCitySelect();
    const udpateBtn = document.getElementById("update-btn");
    udpateBtn.addEventListener("click", updateWeather);
    const citySelect = document.getElementById("city-select");
    citySelect.addEventListener("change", displayWeather);
};

getObjectArray()