const MapWrapper = function(container, coords, zoom) {
  this.map = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.refresh = function() {
  google.maps.event.trigger(this.map,'resize');
}

MapWrapper.prototype.updateMap = function (coords, zoom) {
  this.map.setCenter(coords);
  this.map.setZoom(zoom);

}

MapWrapper.prototype.aroundMe = function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.updateMap(location, 19);
      this.addMarker(location)
    }.bind(this), function() {
      alert('Not worked');
    });
  }
  else{
    alert('you do not have geolocation available on your device');
  }
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.map
  });
}

// MapWrapper.prototype.setRadius = function (coords, radius) {
//   const circleOptions = {
//     center: coords,
//     fillOpacity: 0,
//     strokeOpacity:0,
//     map: this.map,
//     radius: radius
//   }
//   const myCircle = new google.maps.Circle(circleOptions);
//   this.map.fitBounds(myCircle.getBounds());
// }

MapWrapper.prototype.centerOnInputCity = function(city, map){
  const  geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': city}, function(results, status) {
    if (status === 'OK') {
      const result = results[0].geometry.location;
      const lat = result.lat();
      const lng = result.lng();
      const cityLocation = {
        lat,
        lng
      };
      this.map.setCenter(cityLocation);
      this.map.setZoom(19);
    };
  }.bind(this));
}

  module.exports = MapWrapper;
