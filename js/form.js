const typeHousingSelected = document.querySelector('#type').value;


switch (typeHousingSelected) {
  case "flat":
    document.querySelector("#price").value = 1000;
    document.querySelector("#price").placeholder = 1000;
    break;
  case "bungalow":
    document.querySelector("#price").placeholder = 0;
    break;
  case "house":
    document.querySelector("#price").placeholder = 5000;
    break;
  case "palace":
    document.querySelector("#price").placeholder = 10000;
    break;
}

console.log(document.querySelector("#price").value);
