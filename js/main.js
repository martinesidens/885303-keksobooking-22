
import {initMap, setCommonMarkers} from './map.js';
import {setFiltersMap} from './map-filters.js'
import {getData} from './server.js';
import {setAvatarPhoto} from './photo.js';

getData().then(setFiltersMap);

initMap();
setAvatarPhoto();




