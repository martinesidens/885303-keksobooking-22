const form = document.querySelector('.ad-form');
const interactiveElements = form.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFilters = mapForm.querySelectorAll('select');

form.classList.add('ad-form--disabled');
mapForm.classList.add('ad-form--disabled');

interactiveElements.forEach((element) => {
  element.setAttribute("disabled", "disabled");
})

mapFilters.forEach((element) => {
  element.setAttribute("disabled", "disabled");
})

//console.log(mapFilters);


// const typeHousingSelected = document.querySelector('#type').value;

// switch (typeHousingSelected) {
//   case "flat":
//     document.querySelector("#price").value = 1000;
//     document.querySelector("#price").placeholder = 1000;
//     break;
//   case "bungalow":
//     document.querySelector("#price").placeholder = 0;
//     break;
//   case "house":
//     document.querySelector("#price").placeholder = 5000;
//     break;
//   case "palace":
//     document.querySelector("#price").placeholder = 10000;
//     break;
// }

// console.log(document.querySelector("#price").value);
