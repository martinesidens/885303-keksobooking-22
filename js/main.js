
import {initMap} from './map.js';
import {setFiltersMap} from './map-filters.js'
import {getData} from './server.js';
import {setAvatarPhoto} from './photo.js';

initMap();
setAvatarPhoto();

getData().then(setFiltersMap);




