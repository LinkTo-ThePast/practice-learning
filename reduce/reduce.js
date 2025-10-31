import { locations } from "./data/locations.js";
import { normalizeString } from "./utils/normalizeString.js";

function getLocationsData() {
  const data = locations;
  return data;
}

function getStates() {
  const locationsData = getLocationsData();

  if (!locationsData) {
    console.log("Not possible to access data.");
    return;
  }
  const statesLocations = Object.keys(locationsData);
  return statesLocations;
}

function mappingStates() {
  const states = getStates().map((state) => ({
    value: state,
    label: state,
  }));

  return states;
}

function normalizeOnlyValues() {
  const statesMap = mappingStates();

  const sanitizedValues = statesMap.forEach((item) => {
    console.log(item);
  });

  return console.log(sanitizedValues);
}

console.log(normalizeOnlyValues());
