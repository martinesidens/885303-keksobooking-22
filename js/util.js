const ALERT_SHOW_TIME = 10000;

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

 function showAlert (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#888888';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}
const success = document.querySelector('#success').content;
const overlay = document.querySelector('.success');

function pushSuccessMessage () {
  const messageContainer = document.querySelector('main');
  messageContainer.appendChild(success);
  success.addEventListener('click', () => {
    success.classList.add('.hidden');
  });
}


function pushFailureMessage () {
  const messageContainer = document.querySelector('main');
  const failure = document.querySelector('#error').content;
  const buttonError = document.querySelector('error__button');
  messageContainer.appendChild(failure);
  console.log(buttonError);
  buttonError.addEventListener('click', () => {console.log('ntcn')});
  // Добавить три обработчика событий: overlay, button, Esc;
  // Удаляю класс hidden (block|none);
  // В разметке можно поставить классы сразу.
//   buttonError.addEventListener('click', (evt) => {

//     // if (evt.key === ('Escape' || 'Esc')) {
//     //   messageContainer.removeChild(failure);
//     // }
//     // messageContainer.removeChild(failure);
//  });
}

export {getRandomArray, getRandomFloat, getRandomInt, showAlert, pushSuccessMessage, pushFailureMessage};
