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

function makeElementPhoto (tagName, className, data) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.src = data;
  return element;
}

export {getRandomArray, getRandomFloat, getRandomInt, makeElementPhoto};
