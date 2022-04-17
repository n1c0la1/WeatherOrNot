let weather = {
    apiKey: "b3248895930230fe22742a1f06f291bd",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=b3248895930230fe22742a1f06f291bd" 
            //+ this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Wetter in " + name;
            //document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        //const conditions = ["Sehr Sonnig", "Sonnig", "Leicht Bewölkt", "Bewölkt", "Stark Bewölkt", "Leichter Regen", "Regen", "Stürmisch", "Gewitter", "Schnee", "Schneesturm"]
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Luftfeuchtigkeit: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this. fetchWeather (document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter"){
        weather.search();
    }
});