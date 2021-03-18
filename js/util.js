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

function pushSuccessMessage() {
  const messageContainer = document.querySelector('main');
  messageContainer.appendChild(success);
  const message = messageContainer.querySelector('.success');

  message.addEventListener('click', () => {
    message.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    console.log(evt);
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      message.classList.add('hidden');
    }
  });
}

function pushFailureMessage() {
  const messageContainer = document.querySelector('main');
  const failure = document.querySelector('#error').content;
  messageContainer.appendChild(failure);
  const message = messageContainer.querySelector('.error');
  const buttonError = message.querySelector('.error__button');

  message.addEventListener('click', () => {
    message.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      message.classList.add('hidden');
    }
  });

  buttonError.addEventListener('click', () => {
    message.classList.add('hidden');
  });
}

export {getRandomArray, getRandomFloat, getRandomInt, showAlert, pushSuccessMessage, pushFailureMessage};
