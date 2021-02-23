import {getAdvertisement} from './data.js';

const advertisements = getAdvertisement();

const mapCanvas = document.querySelector('#map-canvas');
const templateCard = document.querySelector('#card').content;

advertisements.forEach((advertisementElement) => {
  const advertisement = templateCard.cloneNode(true);
  advertisement.querySelector('.popup__title').textContent = advertisementElement.offer.title;
  advertisement.querySelector('.popup__text--address').textContent = advertisementElement.offer.address;
  advertisement.querySelector('.popup__text--price').textContent = advertisementElement.offer.price + ' ' + '₽/ночь';
  let typeHousing = advertisementElement.offer.type;
  switch (typeHousing) {
    case 'flat':
      typeHousing = 'Квартира';
      break;
    case 'bungalow':
      typeHousing = 'Бунгало';
      break;
    case 'house':
      typeHousing = 'Дом';
      break;
    case 'palace':
      typeHousing = 'Дворец';
      break;
  }
  advertisement.querySelector('.popup__type').textContent = typeHousing;
  advertisement.querySelector('.popup__text--capacity').textContent = advertisementElement.offer.rooms + ' комнаты для ' + advertisementElement.offer.guests + ' гостей.';
  advertisement.querySelector('.popup__text--time').textContent = 'Заезд после ' + advertisementElement.offer.checkin + ', выезд до ' + advertisementElement.offer.checkout;
  advertisement.querySelector('.popup__features').textContent = advertisementElement.offer.features;
  console.log(advertisementElement.offer.features);

  advertisement.querySelector('.popup__description').textContent = advertisementElement.offer.description;
  mapCanvas.appendChild(advertisement);
});

function getCard (ad) {
    console.log(ad.offer.title);
  }


export {getCard};
