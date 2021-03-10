const formElement = document.querySelector('.ad-form');
const interactiveElements = formElement.querySelectorAll('fieldset');
const mapFormElement = document.querySelector('.map__filters');
const mapFilterElements = mapFormElement.querySelectorAll('select');
const priceElement = document.querySelector('#price');

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

export {switchForm};
