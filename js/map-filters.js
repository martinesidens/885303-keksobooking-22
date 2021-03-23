import {setCommonMarkers} from './map.js';

const mapFiltersForm = document.querySelector('.map__filters');

function filterDataHandler (list, evt)  {
  const dataForm = evt.target.value;
  const qwer = new FormData(mapFiltersForm);
  const listFilters = [];
  for (var value of qwer.values()) {
    listFilters.push(value);
    console.log(listFilters);
 }
  const filteredList = list.filter((element) => {

    if (element.offer.type === dataForm) {
      return true;
    }
  });
  setCommonMarkers(filteredList);
}

function setFiltersMap (list) {
  setCommonMarkers(list);
  mapFiltersForm.addEventListener('change', filterDataHandler.bind(undefined, list));
}

export {setFiltersMap};
