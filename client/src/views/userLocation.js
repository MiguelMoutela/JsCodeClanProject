const UserLocation = function(){

  //  navigator.geolocation.getCurrentPosition(function(position) {
  //   const location = {
  //     lat: position.coords.latitude,
  //     lng: position.coords.longitude
  //   }
  //
  //   // this.googleMap.setCenter(location);
  //
  //   // googleMap.addMarker(location, 'This is your current location');
  //
  // })
}

UserLocation.prototype.getLocation = function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getLocation, locationFailed);
  }
  else{
    alert('you do not have geolocation available on your device');
  }
}

  const getLocation = function(position){
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

  }

  const locationFailed = function(){
    alert("Error occured. We did not get your location");
  }





module.exports = UserLocation;
