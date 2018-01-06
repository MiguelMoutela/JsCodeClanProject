const MapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = []
}


MapWrapper.prototype.whereAmI = function() {
 navigator.geolocation.getCurrentPosition(function(position) {
   const location = {
     lat: position.coords.latitude,
     lng: position.coords.longitude
   }
   this.googleMap.setCenter(location);
   this.addMarker(location, 'This is your current location');
 }.bind(this))
}

module.exports = MapWrapper;
