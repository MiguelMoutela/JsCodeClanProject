const FormView = require('./views/formView.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/mapWrapper.js');
const UserLocation = require('./views/userLocation.js');

const app = function(){

  const mapContainer = document.querySelector('#main-map');

  const sucess = function(position){
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    const mainMap = new MapWrapper(mapContainer, location, 15);
  }

  const error = function(){
    alert("Error occured. We did not get your location");
  }

  const userlocation = new UserLocation();
  userlocation.getLocation(sucess, error);


//this is executing the alert even though the button has not been clicked
   // var searchButton = document.querySelector('#search-events');
   // //var inputCity = document.querySelector('#city').value;
   // searchButton.addEventListener('click', alert(inputCity));

}
document.addEventListener('DOMContentLoaded', app);
// var inputCity = document.querySelector('#city').value;
