import {getData} from './server.js';
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
  mapFiltersForm.addEventListener('change', (evt) => {
    //console.log(valueForm);
    const dataForm = evt.target.value;
    console.log(dataForm);
    list.filter((element) => {
      console.log(element);
      element.offer.type === 'palace';
      //element.offer.type === 'palace';
      //offer.type === palace;
      //console.log(element.offer.type);
      //console.log(dataForm);
      //console.log(list);
    })
    setCommonMarkers(list);
  });
  
}


export {FiltersMap};

//  Делаем один обработчик на все input;
//  Собираем состояние всех фильтров из формы;
//  Ищемfff

