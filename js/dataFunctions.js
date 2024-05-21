export const getSearchTerm = () => {
  const rawSearchTerm = document.getElementById("search").value.trim();
  const regex = /[ ]{2,}/gi;
  const searchTerm = rawSearchTerm.replaceAll(regex, " ");
  return searchTerm;
};

export const retrieveSearchResults = async (searchTerm) => {
  const citySearchString = getCitySearchString(searchTerm);
  const citySearchResults = await requestData(citySearchString);
  let resultArray = [];
  if (citySearchResults.hasOwnProperty("query")) {
    resultArray = processCityResults(citySearchResults.query.pages);
  }
  return resultArray;
};

export const getCitySearchString = (searchTerm) => {
  const maxChars = getMaxChars();
  const rawSearchString = `http://api.weatherapi.com/v1/search.json?key=96da7893841b4d90a9651147241903&q=${searchTerm}`;
  const searchString = encodeURI(rawSearchString);
  return searchString;
};

export const getMaxChars = () => {
  const width = window.innerWidth || document.body.clientWidth;
  let maxChars;
  if (width < 414) maxChars = 65;
  if (width >= 414 && width < 1400) maxChars = 100;
  if (width >= 1400) maxChars = 130;
  return maxChars;
};

export const requestData = async (searchString) => {
  try {
    const response = await fetch(searchString);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const processCityResults = (results) => {
  const resultArray = [];
  Object.keys(results).forEach((key) => {
    const id = key;
    const title = results[key].title;
    const text = results[key].extract;
    const img = results[key].hasOwnProperty("thumbnail")
      ? results[key].thumbnail.source
      : null;
    const item = {
      id: id,
      title: title,
      img: img,
      text: text,
    };
    resultArray.push(item);
  });
  return resultArray;
};
