const form = document.querySelector('.ad-form');
const interactiveElements = form.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFilters = mapForm.querySelectorAll('select');
const price = document.querySelector("#price");


function disabledForm () {
  form.classList.add('ad-form--disabled');
  mapForm.classList.add('ad-form--disabled');

  interactiveElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  })

  mapFilters.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  })
}

function activeForm () {
  form.classList.remove('ad-form--disabled');
  mapForm.classList.remove('ad-form--disabled');

  interactiveElements.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  })

  mapFilters.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  })
}


const minValueForHousing = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
}

function onChangePrice (evt) {
    const typeHousingSelected = evt.target.value;
    price.value = minValueForHousing[typeHousingSelected];
  }

document.querySelector('#type').addEventListener('change', onChangePrice);

export {activeForm, disabledForm};
