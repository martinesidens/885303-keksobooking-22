import {showAlert, pushSuccessMessage, pushFailureMessage} from './util.js';

function getData () {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      return json;
    })
    .catch((err) => {
      showAlert('Отсутствует соединение с сервером. Проверьте подключение к интернету.');
      console.error(err);
    })
}

function pushData (formData) {
  fetch('https://22.javascript.pages.academy/keksobooking',
  {
    method: 'POST',
    body: formData,
  },
  )
  .then(pushSuccessMessage)
  .catch(pushFailureMessage);
  // fixme Отрабатывает then там где не надо
}

//console.log(formData);

export {getData, pushData};
