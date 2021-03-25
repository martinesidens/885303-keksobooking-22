/* global _:readonly */

import {initMap} from './map.js';
import {setFiltersMap} from './map-filters.js'
import {getData} from './server.js';


initMap();

getData().then((_.debounce(setFiltersMap,  RERENDER_TIME)));




