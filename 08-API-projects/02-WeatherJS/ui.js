class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");

    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");

    this.pressure = document.getElementById("w-pressure");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description.replace(
      /\b\w/g,
      function (l) {
        return l.toUpperCase();
      }
    );
    this.string.textContent = `${weather.main.temp}${String.fromCharCode(
      176
    )}C`;

    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );

    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.feelsLike.textContent = `Feels Like: ${
      weather.main.feels_like
    }${String.fromCharCode(176)}C`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
  }
}
