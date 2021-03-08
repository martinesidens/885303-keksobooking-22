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

document.querySelector('#type').addEventListener('change', onChangePrice);

export {switchForm};
