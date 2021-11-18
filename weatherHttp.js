"use strict";
var SendRequest = /** @class */ (function () {
    function SendRequest() {
        var _this = this;
        var _a;
        this.data = [];
        this.weather = {
            apiKey: "7568e5d671b83f45b7b251fd594a2ce3",
            fetchWeather: function (city) {
                fetch("https://api.openweathermap.org/data/2.5/weather?q="
                    + city + "&units=metric&appid="
                    + _this.weather.apiKey).then(function (res) { return res.json(); })
                    .then(function (data) { return _this.displayWeather(data); });
            }
        };
        console.log("hi");
        (_a = document.getElementById("Search")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            _this.search();
        });
        // }
        // public getData() {
        //   console.log(this.data);
        //   return this.data;
        // }
        // private setData(p: object) {
        //   this.data.push(p);
        // }
        // fetchData = async () => {
        //   const response = await fetch("https://covid-19-coronavirus-statistics2.p.rapidapi.com/countriesData/", {
        //     "method": "GET",
        //     "headers": {
        //       "x-rapidapi-host": "covid-19-coronavirus-statistics2.p.rapidapi.com",
        //         "x-rapidapi-key":
        //           "f978026baemsh05e1104ea025665p14e7e1jsnab4674ce7e6a",
        //     }
        //   })
        //     .then((res) => res.json())
        //     // .then((rec) => console.log(rec.result[0]))
        //     .then((rec: any) => {
        //       console.log(rec);
        //       return rec.result.map((d: any) => this.setData(d));
        //     })
        //     .catch((err: any) => console.error(err));
        //   return this.getData();
        // };
    }
    SendRequest.prototype.displayWeather = function (data) {
        console.log(data);
        var name = data.name;
        var icon = data.weather[0].icon;
        var description = data.weather[0].description;
        var _a = data.main, temp = _a.temp, humidity = _a.humidity;
        var speed = data.wind.speed;
        var cityWeather = document.querySelector(".city");
        var weatherDescription = document.querySelector(".description");
        var temperature = document.querySelector(".temp");
        var hum = document.querySelector(".humidity");
        var windSpeed = document.querySelector(".wind");
        //var iconDisplayed = document.querySelector(".icon");
        if (cityWeather) {
            cityWeather.innerHTML = "Weather in " + name;
        }
        if (weatherDescription) {
            weatherDescription.innerHTML = description;
        }
        if (temperature) {
            temperature.innerHTML = temp + "°C";
        }
        if (hum) {
            hum.innerHTML = "Humidity : " + humidity + "%";
        }
        if (windSpeed) {
            windSpeed.innerHTML = "Wind speed: " + speed + "km/h";
        }
        console.log(name, icon, description, temp, humidity, speed);
    };
    SendRequest.prototype.search = function () {
        var search = document.querySelector(".search-bar");
        this.weather.fetchWeather(search === null || search === void 0 ? void 0 : search.value);
    };
    return SendRequest;
}());
var a = new SendRequest();
//a.fetchData();
//a.getData();
