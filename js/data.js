import {getRandomArray, getRandomFloat, getRandomInt} from './util.js';
import {TYPE, AT_TIME, MIN_X, MAX_X, MIN_Y, MAX_Y, MIN_NUM, MAX_NUM, MIN_ROOMS, MAX_ROOMS, MIN_GUESTS, MAX_GUESTS, MIN_PRICE, MAX_PRICE, titleAdvt, descriptionAdvt, FEATURES, PHOTOS} from './variables.js';

function getLocation() {
  return {
    x: getRandomFloat(MIN_X, MAX_X, 5),
    y: getRandomFloat(MIN_Y, MAX_Y, 5),
  }
}

function createAdvertisement() {
  const address = getLocation();
  return {
    author: {
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
      features: getRandomArray(FEATURES),
      description: descriptionAdvt,
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: address.x,
      y: address.y,
    },
  }
}

function getAdvertisement() {
  return Array(10).fill('').map(() => createAdvertisement());
}

export {getAdvertisement};
