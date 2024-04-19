
const api_url =
  "https://api.weatherapi.com/v1/search.json?key=96da7893841b4d90a9651147241903&q=Paris";
  const forecastCardTemplate = document.querySelector("[data-forecast-template]");
  const forecastCardContainer = document.querySelector("[data-forecast-cards-container]");
  const searchInput = document.querySelector("[data-search]");

  let places = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(value);
});

fetch(api_url)
  .then((res) => res.json())
  .then(data => {
    places = data.map((forecast) => {
      const card = forecastCardTemplate.content.cloneNode(true).children[0];
      const time = card.querySelector("[data-forecast-time]");
      const icon = card.querySelector("[data-forecast-icon]");
      const degrees = card.querySelector("[data-forecast-degrees]");
      time.textContent = forecast.lat;
      icon.textContent = forecast.id;
      degrees.textContent = forecast.region;
      forecastCardContainer.append(card);
      return { time: forecast.lat, icon: forecast.icon, degrees: forecast.region, element: card }
    });
  });

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
