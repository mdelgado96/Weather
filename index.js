const api_url =
  "https://api.weatherapi.com/v1/current.json?key=96da7893841b4d90a9651147241903&q=London&aqi=no";
const searchInput = document.querySelector("[data-search]");
const forecastCardTemplate = document.querySelector("[data-forecast-template]");

searchInput.addEventListener("input", e => {
  const value = e.target.value;
  console.log(value);
});

fetch(api_url).then(res => res.json()).then(data => {
  const forecast = forecastCardTemplate.content.cloneNode(true)
  console.log(forecast)
})

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
