'use strict'

const type = ['palace','flat','house','bungalow'];
const atTime = ['12:00', '13:00', '14:00'];

const minX = 35.65000;
const maxX = 35.70000;
const minY = 139.70000;
const maxY = 139.80000;

function getRandomFloat(minNumber, maxNumber, symbolAfterPoint) {
  if(minNumber >= 0 && maxNumber >= 0 && (maxNumber >= minNumber)) {
    return parseFloat((Math.random() * (maxNumber - minNumber) + minNumber).toFixed(symbolAfterPoint));
  }
}

function getRandomInt (minNumber, maxNumber) {
  if(minNumber >= 0 && maxNumber >= 0 && (maxNumber >= minNumber)) {
    return parseInt(Math.random() * (maxNumber - minNumber) + minNumber);
  }
}

function getAuthor (minNumber, maxNumber) {
  return {
    avatar: 'img/avatars/user0' + getRandomFloat(minNumber, maxNumber) + '.png',
  }
}

function getOffer () {
  return {
    title: 'Сдается квартира на улице Хошимина',
    // address: ,
    price: Math.abs(2500),
    type: type[getRandomInt(0, type.length - 1)],
    rooms: Math.abs(2),
    guests: Math.abs(4),
    checkin: atTime[getRandomInt(0, atTime.length - 1)],
    checkout: atTime[getRandomInt(0, atTime.length - 1)],
    // features: ,
    description: 'Мебель, посуда и отличный вид на соседние трущобы.',
    // photos: ,
  }
}

function getLocation(minX, maxX, minY, maxY) {
  return {
    x: getRandomFloat(minX, maxX, 5),
    y: getRandomFloat(minY, maxY, 5),
  }
}

function createAdvertisement() {
  return {
    autor: getAuthor(),
    offer: getOffer(),
    location: getLocation(),
  }
}

const advt = new Array(10).fill('').map(() => createAdvertisement());
