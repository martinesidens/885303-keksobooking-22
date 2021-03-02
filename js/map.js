import {activeForm, disabledForm} from './form.js';

disabledForm();

const map = L.map('map-canvas').on('load', () => {
  activeForm();
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
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

const marker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    icon: myIcon
  },
);

marker.addTo(map);
