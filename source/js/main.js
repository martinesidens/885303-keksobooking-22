
/* global _:readonly */
import 'leaflet/dist/leaflet.js';
import * as _ from 'lodash';
import {initMap} from './map.js';
import {setFiltersMap} from './map-filters.js'
import {getData} from './server.js';
import {setAvatarPhoto} from './photo.js';

const RERENDER_TIME = 500;

getData().then(_.debounce(setFiltersMap,  RERENDER_TIME));

initMap();
setAvatarPhoto();

