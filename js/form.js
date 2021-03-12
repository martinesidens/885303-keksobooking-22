import {MAX_PRICE} from './variables.js';

const formElement = document.querySelector('.ad-form');
const interactiveElements = formElement.querySelectorAll('fieldset');
const mapFormElement = document.querySelector('.map__filters');
const mapFilterElements = mapFormElement.querySelectorAll('select');
const priceElement = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacityGuests = document.querySelector('#capacity');

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const titleAdvertisement = document.querySelector('#title');

const MIN_VALUE_FOR_HOUSING = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
}

function switchForm () {
  formElement.classList.toggle('ad-form--disabled');
  mapFormElement.classList.toggle('ad-form--disabled');

  interactiveElements.forEach((element) => {
    element.toggleAttribute('disabled');
  })

  mapFilterElements.forEach((element) => {
    element.toggleAttribute('disabled');
  })
}

function onChangePrice (evt) {
  const typeHousingSelected = evt.target.value;
  priceElement.value = MIN_VALUE_FOR_HOUSING[typeHousingSelected];
  priceElement.placeholder = MIN_VALUE_FOR_HOUSING[typeHousingSelected];
}

function onChangeTimeIn (evt) {
  const time = evt.target.value;
  const timeOut = document.querySelector('#timeout');
  switch (time) {
    case '12:00':
      timeOut.value = '12:00';
      break;
    case '13:00':
      timeOut.value = '13:00';
      break;
    case '14:00':
      timeOut.value = '14:00';
      break;
  }
}

function onChangeTimeOut (evt) {
  const time = evt.target.value;
  const timeIn = document.querySelector('#timein');
  switch (time) {
    case '12:00':
      timeIn.value = '12:00';
      break;
    case '13:00':
      timeIn.value = '13:00';
      break;
    case '14:00':
      timeIn.value = '14:00';
      break;
  }
}

document.querySelector('#type').addEventListener('change', onChangePrice);
document.querySelector('#timein').addEventListener('change', onChangeTimeIn);
document.querySelector('#timeout').addEventListener('change', onChangeTimeOut);

titleAdvertisement.addEventListener('input', () => {
  const valueLength = titleAdvertisement.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    titleAdvertisement.setCustomValidity(`Добавьте ещё ${MIN_NAME_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    titleAdvertisement.setCustomValidity(`Удалите лишние ${valueLength - MAX_NAME_LENGTH} символы`);
  } else {
    titleAdvertisement.setCustomValidity('');
  }
  titleAdvertisement.reportValidity();
});

priceElement.addEventListener('input', () => {
  if (priceElement.value > MAX_PRICE) {
    priceElement.setCustomValidity(`Введенная сумма превышает максимально возможное значение на ${MAX_PRICE - priceElement.value}`);
  } else {
    priceElement.setCustomValidity('');
  }
  priceElement.reportValidity();
});

capacityGuests.addEventListener('change', () => {
  
  if (capacityGuests[2]) {
    roomNumber[0].removeAttribute('disabled');
  } else if (capacityGuests[2]) {
    roomNumber[0].removeAttribute('disabled');
    roomNumber[1].removeAttribute('disabled');
  } else if (capacityGuests[2]) {
    roomNumber[0].removeAttribute('disabled');
    roomNumber[1].removeAttribute('disabled');
    roomNumber[2].removeAttribute('disabled');
  } else (capacityGuests[3]) {
    roomNumber[3].removeAttribute('disabled');
  } 
 
  console.log(capacityGuests[0]);
  console.log(capacityGuests[1]);
  console.log(capacityGuests[2]);
  console.log(capacityGuests[3]);
  console.log(roomNumber[0]);
});

export {switchForm};
