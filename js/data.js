import {getRandomArray, getRandomFloat, getRandomInt} from './util.js';

let type = ['palace','flat','house','bungalow'];
let atTime = ['12:00', '13:00', '14:00'];

const minX = 35.65000;
const maxX = 35.70000;
const minY = 139.70000;
const maxY = 139.80000;

const minNum = 1;
const maxNum = 8;

let minRooms = 2;
let maxRooms = 5;
let minGuests = 4;
let maxGuests = 10;

let titleAdvt = '';
let descriptionAdvt = '';

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

function getLocation() { 
  return { 
    x: getRandomFloat(minX, maxX, 5),
    y: getRandomFloat(minY, maxY, 5),
  } 
}

function createAdvertisement() {
  const address = getLocation();
  return {
    autor: {
      avatar: 'img/avatars/user0' + getRandomInt(minNum, maxNum) + '.png',
    },
    offer: {
      title: titleAdvt,
      address: address.x + ',' + address.y,
      price: Math.abs(2500),
      type: type[getRandomInt(0, type.length - 1)],
      rooms: Math.abs(getRandomInt(minRooms, maxRooms)),
      guests: Math.abs(getRandomInt(minGuests, maxGuests)),
      checkin: atTime[getRandomInt(0, atTime.length - 1)],
      checkout: atTime[getRandomInt(0, atTime.length - 1)],
      features: getRandomArray(features),
      description: descriptionAdvt,
      photos: getRandomArray(photos),
    },
    x: address.x,
    location: {
      y: address.y,
    },
  }
}

function getAdvt() {
  return [
    new Array(10).fill('').map(() => createAdvertisement())   
  ]
}

export {getAdvt, createAdvertisement};