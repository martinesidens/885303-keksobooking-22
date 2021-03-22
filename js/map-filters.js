import {setCommonMarkers} from './map.js';


const mapFiltersForm = document.querySelector('.map__filters');
const housingTypeElement = document.querySelector('#housing-type');
const housingPriceElement = document.querySelector('#housing-price');
const housingRoomsElement = document.querySelector('#housing-rooms');
const housingGuestsElement = document.querySelector('#housing-guests');

const filterWifiElement = document.querySelector('#filter-wifi');
const filterDishwasherElement = document.querySelector('#filter-dishwasher');
const filterParkingElement = document.querySelector('#filter-parking');
const filterWasherElement = document.querySelector('#filter-washer');
const filterElevatorElement = document.querySelector('#filter-elevator');
const filterConditionerElement = document.querySelector('#filter-conditioner');

function FiltersMap (list) {
  setCommonMarkers(list);
  const newList = [];
  mapFiltersForm.addEventListener('change', (evt) => {
    //console.log(valueForm);
    const dataForm = evt.target.value;
    list.filter((element) => {
      // console.log(element.offer.type);
      // console.log(dataForm);
      // console.log('_________________');
      //console.log(list);


      if (element.offer.type === dataForm || element.price === dataForm || element.rooms === dataForm || element.guests === dataForm) {
        console.log(list);
        return true;
      }
      //newList.push('');
    });
    setCommonMarkers(newList);
  });
}

export {FiltersMap};
