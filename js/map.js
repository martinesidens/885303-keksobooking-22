/* global L*/

import {switchForm} from './form.js';
import {getAdvertisementElement} from './get-card.js';
import {getData} from './server.js';

const mainLatLngElement = document.querySelector('#address');
mainLatLngElement.value = '35.6895, 139.692';

const LAT = 35.6895;
const LNG = 139.692

const myIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [38, 95],
  iconAnchor: [26, 52],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

const marker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    icon: myIcon,
  },
);

const map = L.map('map-canvas');

switchForm();

function initMap () {
  map.on('load', () => {
    switchForm();
    mainLatLngElement.value = '35.6895, 139.692';
  })
    .setView([35.6895, 139.692], 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  marker.addTo(map);
  marker.on('moveend', (evt) => {
    document.querySelector('#address').value = `${parseFloat(evt.target.getLatLng().lat).toFixed(5)}, ${parseFloat(evt.target.getLatLng().lng).toFixed(5)}`;
  });

  getData().then(setCommonMarkers);

  function setCommonMarkers (list) {
    list.forEach((advertisement) => {
      const commonIcon = L.icon({
        iconUrl: '../img/pin.svg',
        iconSize: [38, 95],
        iconAnchor: [26, 52],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94],
      });

      const marker = L.marker(

        {
          lat: advertisement.location.lat,
          lng: advertisement.location.lng,
        },
        {
          draggable: true,
          icon: commonIcon,
        },
      );

      marker.addTo(map);
      marker.bindPopup(getAdvertisementElement(advertisement));
    });
  }
}

function setDefualtMarker () {
  const marker = L.marker(
    {
      lat: LAT,
      lng: LNG,
    },
    {
      draggable: true,
      icon: myIcon,
    },
  );
  marker.setLatLng(L.latLng(LAT, LNG));
}

export {initMap, myIcon, marker, mainLatLngElement, setDefualtMarker};
