class SendRequest {
  private weather: any;
  private data: any[] = [];

  constructor() {
    this.weather = {
      apiKey: "7568e5d671b83f45b7b251fd594a2ce3",
      fetchWeather: (city: String) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
          + city + "&units=metric&appid="
          + this.weather.apiKey
        ).then((res) => res.json())
          .then((data) => this.displayWeather(data))
      }
    }
    document.getElementById("Search")?.addEventListener("click", () =>{
    this.search();
      })
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
  displayWeather(data: any): any {
    console.log(data);
    const name = data.name;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const { temp, humidity } = data.main;
    const speed = data.wind.speed;
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
    if(temperature)
    {
      temperature.innerHTML = temp + "°C";
    }
    if(hum)
    {
      hum.innerHTML = "Humidity : " + humidity + "%";
    }
    if(windSpeed)
    {
      windSpeed.innerHTML = "Wind speed: " + speed + "km/h";
    }
    console.log(name, icon, description, temp, humidity, speed);
  }

  search():any{
    var search = document.querySelector<HTMLInputElement>(".search-bar");
    this.weather.fetchWeather(search?.value);
  }
}
var a = new SendRequest();

//a.fetchData();
//a.getData();