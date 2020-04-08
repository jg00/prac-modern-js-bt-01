// Initialize Local Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocation(); // returns {city, state} from local storage

// Initialize Weather
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Initialize UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event - Modal > Button "Save Location" click
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // Change weather object state
  weather.changeLocation(city, state);

  // Set location in local storage
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
