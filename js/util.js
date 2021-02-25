function getRandomArray (array) {
  return [Array.from(array.slice(0, getRandomInt (0, array.length-1)))];
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

// function findElementArray (array, element) {
//   for (var i = 0; i < array.length; i++) {
//       if (array[i] === element) {
//           return true;
//       }
//   }
//   return false;
// }

function findElementArray (array, arrayElement) {
  let elem = array.indexOf(arrayElement);
  if (elem != -1 ) {
      return true;
  }
}

export {getRandomArray, getRandomFloat, getRandomInt, findElementArray};
