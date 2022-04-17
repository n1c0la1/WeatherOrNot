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
        const tempNew = Math.floor(Math.random() * (105 - (-50) + 1) ) + (-50)
        const conditions = ["Sehr Sehr Sonnig", "Sehr Sonnig", "Sonnig", "Leicht Bewölkt", "Bewölkt", "Stark Bewölkt", "Leichter Regen", "Regen", "Stürmisch", "Gewitter", "Schnee", "Schneesturm"]
        document.querySelector(".temp").innerText = tempNew  + "°C";

        if (tempNew >= -50 && tempNew <= -20) {
            const conditionsNew = conditions[11]
            document.querySelector(".description").innerText = conditionsNew;
        }
        else if (tempNew >= -20 && tempNew <= 0) {
            const conditionsNew = conditions[10]
            document.querySelector(".description").innerText = conditionsNew;
        }
        else if (tempNew >= 0 && tempNew <= 5) {
            const conditionsNew = conditions[9]
            document.querySelector(".description").innerText = conditionsNew;
        }
        else if (tempNew >= 5 && tempNew <= 8) {
            const conditionsNew = conditions[8]
            document.querySelector(".description").innerText = conditionsNew;
        }
        else if (tempNew >= 8 && tempNew <= 11) {
            const conditionsNew = conditions[7]
            document.querySelector(".description").innerText = conditionsNew;
        }
        else if (tempNew >= 11 && tempNew <= 15) {
            const conditionsNew = conditions[6]
            document.querySelector(".description").innerText = conditionsNew;
        }
        else if (tempNew >= 15 && tempNew <= 18) {
            const conditionsNew = conditions[5]
            document.querySelector(".description").innerText = conditionsNew;
        }
        else if (tempNew >= 20 && tempNew <= 23) {
            const conditionsNew = conditions[4]
            document.querySelector(".description").innerText = conditionsNew;
        }
        else if (tempNew >= 23 && tempNew <= 25) {
            const conditionsNew = conditions[3]
            document.querySelector(".description").innerText = conditionsNew;
        }
        else if (tempNew >= 25 && tempNew <= 35) {
            const conditionsNew = conditions[2]
            document.querySelector(".description").innerText = conditionsNew;
        }
        else if (tempNew >= 35 && tempNew <= 65) {
            const conditionsNew = conditions[1]
            document.querySelector(".description").innerText = conditionsNew;
        }
        else if (tempNew >= 65 && tempNew <= 105) {
            const conditionsNew = conditions[0]
            document.querySelector(".description").innerText = conditionsNew;
        }

        //document.querySelector(".description").innerText = conditionsNew;

        document.querySelector(".humidity").innerText = "Luftfeuchtigkeit: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind: " + Math.floor(Math.random() * (200 - (-5) + 1) ) + "km/h";
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