function getRandomArray (data) {
  return Array.from(data.slice(0, getRandomInt (0, data.length)));
}

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

export {getRandomArray, getRandomFloat, getRandomInt};
