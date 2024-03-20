const api_url =
  "https://api.weatherapi.com/v1/current.json?key=96da7893841b4d90a9651147241903&q=London&aqi=no";
async function main() {
  const response = await fetch(api_url);

  const data = await response.json();
  console.log(data.location);
}

main();
