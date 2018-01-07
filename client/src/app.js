const FormView = require('./views/formView.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/mapWrapper.js');
const UserLocation = require('./views/userLocation.js');

const app = function(){
  // const center = {
  //     lat: 55.946962,
  //     lng: -3.20195
  // }
  // const newform = new FormView();
  // newform.viewCitySearch;
  const mapContainer = document.querySelector('#main-map');
  const userlocation = new UserLocation();
  const coords = userlocation.getLocation();
  const mainMap = new MapWrapper(mapContainer, coords, 7);
  // mainMap.whereAmI();
  // console.log(this.location);
}

document.addEventListener('DOMContentLoaded', app);
