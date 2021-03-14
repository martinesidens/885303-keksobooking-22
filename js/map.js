/* global L*/

import {switchForm} from './form.js';
import {getAdvertisementElement} from './get-card.js';
import {getData} from './server.js';


switchForm();

function initMap () {
  const map = L.map('map-canvas').on('load', () => {
    switchForm();
    document.querySelector('#address').value = '35.6895, 139.692';
  })
    .setView([35.6895, 139.692], 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

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
      lat: 35.6895,
      lng: 139.692,
    },
    {
      draggable: true,
      icon: myIcon,
    },
  );

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

export {initMap};
