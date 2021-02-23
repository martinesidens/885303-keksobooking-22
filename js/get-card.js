import {getAdvt} from './data.js';

const advt = getAdvt();

const mapCanvas = document.querySelector('#map-canvas');
const templateCard = document.querySelector('#card').content;

advt.forEach(() => {
  const advtElement = templateCard.cloneNode(true);
  advtElement.querySelector('.popup__title').textContent;
  mapCanvas.appendChild(advtElement);
});

function getCard (advt) {
    console.log(advt.offer.title);
  }


export {getCard};
