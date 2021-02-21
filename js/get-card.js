import {getAdvt} from './data.js';

const advt = getAdvt();

console.log(advt)
const mapCanvas = document.querySelector('#map-canvas');
const templateCard = document.querySelector('#card').content;

advt.forEach((advt) => {
  const advtElement = templateCard.cloneNode(true);
  advtElement.querySelector('.popup__title').textContent;
  mapCanvas.appendChild(advtElement);
});



function getCard (advt) {
  const title = templateCard.querySelector('.popup__title').textContent;

  // console.log(title);
}



export {getCard};
