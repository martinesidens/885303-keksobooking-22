import {getData} from './server.js';


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

function FiltersMap () {
  mapFiltersForm.addEventListener('change', () => {
    const data = new FormData(mapFiltersForm);
    data.forEach((element) => {
      console.log(element);
    })
  });
}


export {FiltersMap};

//  Делаем один обработчик на все input;
//  Собираем состояние всех фильтров из формы;
//  Ищем

