const Request = require('../services/request.js');
const MapWrapper = require('./mapWrapper.js');

const DbView = function(){}

DbView.prototype.renderDbMap= function(){

  const url = 'http://localhost:3000/api/EventWishList';

  const requestToDb = new Request(url);

  requestToDb.get(function(object){

    const mapContainer = document.querySelector('#main_map');

    const latCenter = parseFloat(object[1].latitude);
    const lngCenter = parseFloat(object[1].longitude);

    const newMapCenter = {
      lat: latCenter,
      lng: lngCenter
    }

    const mainMap = new MapWrapper(mapContainer, newMapCenter, 15 );

    if(object.length === 0) {
      alert("You have no events saved ")
    } else
    {
      for (i = 0; i < object.length; i++) {
        const lat = parseFloat(object[i].latitude);
        const lng = parseFloat(object[i].longitude);
        const coords = {
          lat: lat,
          lng: lng
        }

        const contentString = object[i].title + object[i].description

        const content = {
          content: contentString

        }
        const markerInfo = mainMap.addMarkerInfoWindow(content);

        const marker =  mainMap.addMarker(coords);
        marker.addListener('click', function() {
          markerInfo.open(mainMap, marker);
        });
      }
    }
  })
}

module.exports = DbView;
