'use strict'

function getRandomInt(minNumber, maxNumber, symbolAfterPoint) {
  return parseFloat((Math.random() * (maxNumber - minNumber) + minNumber).toFixed(symbolAfterPoint));
}
