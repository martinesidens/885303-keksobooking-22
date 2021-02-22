import {getAdvt} from './data.js';

const advt = getAdvt();



const mapCanvas = document.querySelector('#map-canvas');
const templateCard = document.querySelector('#card').content;

advt.forEach(() => {
  const advtElement = templateCard.cloneNode(true);
  advtElement.querySelector('.popup__title').textContent;
  mapCanvas.appendChild(advtElement);
  console.log(advt);
});

function getCard (advt) {
}



export {getCard};
