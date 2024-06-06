import {
  setSearchFocus,
  showClearTextButton,
  clearPushListener,
} from "./js/searchBar";
import {
  deleteSearchResults,
  buildSearchResults,
  clearStatsLine,
  setStatsLine,
} from "./js/searchResults";
import { getSearchTerm, retrieveSearchResults } from "./js/dataFunctions";

let value;
const api_url = `https://api.weatherapi.com/v1/search.json?key=96da7893841b4d90a9651147241903&q=London`;

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    intiApp();
  }
});

const intiApp = () => {
  setSearchFocus();
  const search = document.getElementById("search");
  search.addEventListener("input", showClearTextButton);
  const clear = document.getElementById("clear");
  clear.addEventListener("click", clearSearchText);
  clear.addEventListener("keydown", clearPushListener);
  const form = document.getElementById("seachBar");
  form.addEventListener("submit", submitTheSearch);
};

const submitTheSearch = (event) => {
  event.preventDefault();
  deleteSearchResults();
  processTheSearch();
  setSearchFocus();
};

const forecastCardTemplate = document.querySelector("[data-forecast-template]");
const forecastCardContainer = document.querySelector(
  "[data-forecast-cards-container]"
);
const searchInput = document.querySelector("[data-search]");

let places = [];

searchInput.addEventListener("input", (e) => {
  value = e.target.value.toLowerCase();
  places.forEach((place) => {
    const isVisible = place.name.includes(value);
    place.element.classList.toggle("hide", !isVisible);
  });
});

// fetch(api_url)
//   .then((res) => res.json())
//   .then((data) => {
//     places = data.map((forecast) => {
//       const card = forecastCardTemplate.content.cloneNode(true).children[0];
//       const time = card.querySelector("[data-forecast-time]");
//       const icon = card.querySelector("[data-forecast-icon]");
//       const degrees = card.querySelector("[data-forecast-degrees]");
//       time.textContent = forecast.lat;
//       icon.textContent = forecast.id;
//       degrees.textContent = forecast.lon;
//       forecastCardContainer.append(card);
//       console.log(data);
//       return {
//         time: forecast.lat,
//         icon: forecast.icon,
//         degrees: forecast.region,
//         element: card,
//       };
//     });
//   });

//   async function main() {
//   try {
//     const response = await fetch(api_url);
//     const data = await response.json();
//     console.log(data.location);
//   } catch (err) {
//     console.log(err);
//   }
// }

// main();

const processTheSearch = async () => {
  clearStatsLine();
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retrieveSearchResults(searchTerm);
  if (resultArray.length)
    /*builds search result on page, since i'm not building a search result this way then I won't need it.*/
    buildSearchResults(resultArray); //might not need this one
    
  setStatsLine(resultArray.length);
};
