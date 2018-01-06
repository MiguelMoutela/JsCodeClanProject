const UserLocation = function(){
  navigator.geolocation.getCurrentPosition(function(position) {
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    this.googleMap.setCenter(location);
    this.addMarker(location, 'This is your current location');
  }.bind(this))

}
