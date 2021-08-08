"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(
  ".form__input--distance"
);
const inputDuration = document.querySelector(
  ".form__input--duration"
);
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(
  ".form__input--elevation"
);

class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        () => console.log("Could not get your current position")
      );
  }

  _loadMap() {
    // const { latitude } = position.coords;
    // const { longitude } = position.coords;
    // Firefox not getting correct location
    const coords = [45.51489444659602, -122.68221182428076];

    this.#map = L.map("map").setView(coords, 17);

    L.tileLayer(
      "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(this.#map);

    // Handling clicks on map
    this.#map.on("click", mapE => {
      this.#mapEvent = mapE;
      form.classList.remove("hidden");
      inputDistance.focus();
    });
  }

  _showForm() {}

  _toggleElevationField() {}

  _newWorkout() {}
}

const app = new App();

form.addEventListener("submit", e => {
  e.preventDefault();

  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      "";

  const { lat, lng } = mapEvent.latlng;

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: "running-popup",
      })
    )
    .setPopupContent("Workout")
    .openPopup().addTo;
});

inputType.addEventListener("change", () => {
  inputElevation
    .closest(".form__row")
    .classList.toggle("form__row--hidden");

  inputCadence
    .closest(".form__row")
    .classList.toggle("form__row--hidden");
});
