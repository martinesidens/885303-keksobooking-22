import {getRandomArray, getRandomFloat, getRandomInt} from './util.js';

let TYPE = ['palace','flat','house','bungalow'];
let AT_TIME = ['12:00', '13:00', '14:00'];

const MIN_X = 35.65000;
const MAX_X = 35.70000;
const MIN_Y = 139.70000;
const MAX_Y = 139.80000;

const MIN_NUM = 1;
const MAX_NUM = 8;

const MIN_ROOMS = 2;
const MAX_ROOMS = 5;
let MIN_GUESTS = 4;
let MAX_GUESTS = 10;

const MIN_PRICE = 1500;
const MAX_PRICE = 10500;

let titleAdvt = '';
let descriptionAdvt = '';

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

function getLocation() { 
  return { 
    x: getRandomFloat(MIN_X, MAX_X, 5),
    y: getRandomFloat(MIN_Y, MAX_Y, 5),
  } 
}

function createAdvertisement() {
  const address = getLocation();
  return {
    autor: {
      avatar: 'img/avatars/user0' + getRandomInt(MIN_NUM, MAX_NUM) + '.png',
    },
    offer: {
      title: titleAdvt,
      address: address.x + ',' + address.y,
      price: Math.abs(getRandomInt(MIN_PRICE, MAX_PRICE)),
      type: TYPE[getRandomInt(0, TYPE.length - 1)],
      rooms: Math.abs(getRandomInt(MIN_ROOMS, MAX_ROOMS)),
      guests: Math.abs(getRandomInt(MIN_GUESTS, MAX_GUESTS)),
      checkin: AT_TIME[getRandomInt(0, AT_TIME.length - 1)],
      checkout: AT_TIME[getRandomInt(0, AT_TIME.length - 1)],
      features: getRandomArray(features),
      description: descriptionAdvt,
      photos: getRandomArray(PHOTOS),
    },
    x: address.x,
    location: {
      y: address.y,
    },
  }
}

function getAdvt() {
  return [
    Array(10).fill('').map(() => createAdvertisement())   
  ]
}

export {getAdvt};