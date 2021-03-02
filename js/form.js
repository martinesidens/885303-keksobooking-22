const form = document.querySelector('.ad-form');
const interactiveElements = form.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFilters = mapForm.querySelectorAll('select');


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

const typeHousingSelected = document.querySelector('#type').value;
const price = document.querySelector("#price");

switch (typeHousingSelected) {
  case "flat":
    price.value = 1000;
    price.placeholder = 1000;
    break;
  case "bungalow":
    price.placeholder = 0;
    break;
  case "house":
    price.placeholder = 5000;
    break;
  case "palace":
    price.placeholder = 10000;
    break;
}
// document.querySelector('#type').addEventListener('change', onChangePrice);
// console.log(document.querySelector("#price").value);

export {activeForm, disabledForm};
