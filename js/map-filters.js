/* global _:readonly */

import {setCommonMarkers, removeMarkers, createMarkers} from './map.js';

const mapFiltersForm = document.querySelector('.map__filters');

const MIDDLE_MIN = 10000;
const MIDDLE_MAX = 50000;

const RERENDER_TIME = 500;

const listFilters = [];

function filterDataHandler(list) {
  
  const mapFilters = new FormData(mapFiltersForm);

  for (const value of mapFilters.values()) {
    listFilters.push(value);
  }
  
  const filteredList = list.filter((element) => {
    
    if (getValue(element.offer.price) === getValuePrice(listFilters, getValue(element.offer.price))) {
      return true;
    }
    
    if (element.offer.type === findElementType(listFilters, element.offer.type)) {
      return true;
    }
    
    if (element.offer.rooms === findElementType(listFilters, element.offer.rooms)) {
      return true;
    }
    
    if (element.offer.guests === findElementType(listFilters, element.offer.guests)) {
      return true;
    }
    
    element.offer.features.forEach((element) => {
      if (element === findElementType(listFilters, element)) {
        return true;
      }
    },
    )
  });
  removeMarkers(list);
  
  filteredList.forEach((element) => {
    createMarkers(element);
  });

  // _.debounce(() => {
  //   renderMarkers(filteredList);    
  // },  RERENDER_TIME);
  
  console.log(filteredList);
}

function renderMarkers (list) {
  list.forEach((element) => {
    createMarkers(element);
  });
}

function setFiltersMap (list) {

    removeMarkers(list);

  mapFiltersForm.addEventListener('change', filterDataHandler.bind(undefined, list));  
}

function findElementType (data, element) {
  if (data.includes(element, 0)) {
    return element;
  }
}

function getValuePrice (data, value) {
  if (data.includes(value, 0)) {
    return value;
  }
}

function getValue (value) {

  if (value > MIDDLE_MIN && value < MIDDLE_MAX) {
    return 'middle';
  } else if (value < MIDDLE_MIN) {
    return 'low';
  } else if (value > MIDDLE_MAX) {
    return 'high';
  }
}
export {setFiltersMap, filterDataHandler};
