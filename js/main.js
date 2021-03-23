import {initMap, setCommonMarkers} from './map.js';
import {setFiltersMap} from './map-filters.js'
import {getData} from './server.js';

initMap();

getData().then(setFiltersMap);



