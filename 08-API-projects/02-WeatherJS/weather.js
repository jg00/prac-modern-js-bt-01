class Weather {
  constructor(city, state) {
    this.apiKey = weatherjs_apiKey;
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=imperial`;

    const response = await fetch(url);

    const responseData = await response.json();

    return responseData; // return data as part of the async getWeather promise
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}

// const url = `http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas&appid=7fbdd8b23a83ffbb6c179a9c4829d542`;
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}
