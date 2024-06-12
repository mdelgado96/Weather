export const deleteSearchResults = () => {
  const parentElement = document.getElementById("searchResults");
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
}

export const buildSearchResults = (resultArray) => {
  resultArray.forEach((result) => {
    const resultItem = createResultItem(result);
    const resultContents = document.createElement("div");
    resultContents.classList.add("resultContents");
    if (result.img) {
      const resultImage = createResultImage(result);
      resultContents.append(resultImage);
    }
    const resultText = createResultText(result);
    resultContents.append(resultText);
    resultItem.append(resultContents);
    const searchResults = document.getElementById("searchResults");
    searchResults.append(resultItem);
  });
};


///////// was originally in index.js /////////////
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
////////////////////////////////////////////////////////

const createResultItem = (result) => {
  const resultItem = document.createElement("div");
  resultItem.classList.add("resultItem");
  const resultTitle = document.createElement("div");
  resultTitle.classList.add("resultTitle");
  const link = document.createElement("a");
  link.href = ``;
  link.textContent = resultTitle;
  link.target = "_blank";
  resultTitle.append(link);
  resultItem.append(resultTitle);
  return resultItem;
};

const createResultImage = (result) => {
  const resultImage = document.createElement("div");
  resultImage.classList.add("resultImage");
  const img = document.createElement("img");
  img.src = result.img;
  img.alt = result.title;
  resultImage.append(img);
  return resultImage;
};

const createResultText = (result) => {
  const resultText = document.createElement("div");
  resultText.classList.add("resultText");
  const resultDescription = document.createElement("p");
  resultDescription.classList.add("resultDescription");
  resultDescription.textContent = result.text;
  resultText.append(resultDescription);
  return resultText;
};