// const Request = require('./services/request.js');
//
//
// const RouteView = function(){
//
//
// }
//
// RouteView.prototype.seeRoute= function(marker, map){
//
//
//   google.maps.event.addListener(marker, 'click', function(evt){
//
//     const lat = google.maps.LatLng.lat();
//     const lng = google.maps.LatLng.lng();
//
//
//     const latDest = evt.latLng.lat();
//     const lngDest = evt.latLng.lng();
//
//     const url =`http://maps.googleapis.com/maps/api/directions/json?origin=${lat},${lng}&destination=${latDest},${lngDest}&key=AIzaSyA2fDkBviTQNwAqdcLNUP7BsJ-hFY46yA8`;
//
//     const request = new Request (url);
//     request.get(map)
//   })
// }
