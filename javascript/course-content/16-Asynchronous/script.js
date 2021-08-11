"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}m</p>
      <p class="country__row"><span>🗣️</span>${
        data.languages[0].name
      }</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[0].name
      }</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
};

function renderError(msg) {
  countriesContainer.textContent = "";
  countriesContainer.insertAdjacentHTML("beforeend", msg);
}

function getJSON(url, errorMsg = "Something went wrong") {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
}

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/alpha/${country}`,
    "Country not found"
  )
    .then(data => {
      renderCountry(data);

      const neighbor = data.borders[0];
      if (!neighbor) throw new Error("No neighbor found");

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
        "Country not found"
      );
    })
    .then(data => renderCountry(data, "neighbour"))
    .catch(err => {
      console.error(`${err}💥💥💥`);
      renderError(
        `Something went wrong 💥💥💥\n${err.message}. Try again!`
      );
    })
    .finally(() => {
      countriesContainer.style.opacity = "1";
    });
};

btn.addEventListener("click", () => getCountryData("KOR"));

getCountryData("AUS");

// const getCountryDataPlus = function (country) {
//   // AJAX country 1
//   const request = new XMLHttpRequest();
//   request.open(
//     "GET",
//     `https://restcountries.eu/rest/v2/alpha/${country}`
//   );
//   request.send();

//   request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText);

//     // Rneder country 1
//     renderCountry(data);

//     // Get neighbor
//     const [neighbor] = data.borders;

//     if (!neighbor) return;

//     const request2 = new XMLHttpRequest();
//     request2.open(
//       "GET",
//       `https://restcountries.eu/rest/v2/alpha/${neighbor}`
//     );
//     request2.send();
//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryDataPlus("PRT");
