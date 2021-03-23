import {setCommonMarkers} from './map.js';

const mapFiltersForm = document.querySelector('.map__filters');

function setFiltersMap (list) {
  const newList = [];
  setCommonMarkers(list);
  mapFiltersForm.addEventListener('change', (evt) => {
    const dataForm = evt.target.value;
    return list.filter((element) => {
      console.log(dataForm);
      //console.log(element);

      if (element.offer.type === dataForm) {
      // || element.price === dataForm || element.rooms === dataForm || element.guests === dataForm) {
        return true;
      }      //newList.push(element);
      console.log(newList);
    });
    //return list;
  });
  setCommonMarkers(newList);
}

export {setFiltersMap};
