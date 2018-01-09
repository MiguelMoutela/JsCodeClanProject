const Request = require('../services/request.js');
const MapWrapper = require('./mapWrapper.js')


const DbView = function(){

}

DbView.prototype.renderDBMap= function(){

const mapContainer = document.querySelector('#main_map');

  const defaultLocation = {
    lat: 0.0,
    lng: 0.0
  };

  const mainMap = new MapWrapper(mapContainer, defaultLocation, 3 );

  const url = 'http://localhost:3000/api/EventWishList';

  const requestToDb = new Request(url);

  requestToDb.get(function(DBobject){

    if(DBobject.events === null) {
      alert("You have no events saved ")
    } else
    {
      mainMap.displayEventMarkers(DBobject);}

    });

  }


  module.exports = DbView; 
