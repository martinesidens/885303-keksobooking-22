import {initMap, setCommonMarkers} from './map.js';
import {FiltersMap} from './map-filters.js'
import {getData} from './server.js';

initMap();

getData().then(FiltersMap);



