import { locations } from "./data/locations.js";

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

console.log(mappingStates());
