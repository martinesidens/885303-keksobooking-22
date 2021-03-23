/* global _:readonly */

import {initMap, setCommonMarkers} from './map.js';
import {setFiltersMap} from './map-filters.js'
import {getData} from './server.js';

const RERENDER_TIME = 500;

initMap();

getData().then((_.debounce(setFiltersMap,  RERENDER_TIME,)));




