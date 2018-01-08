const MapWrapper = function (){
  this.markers = [];
}

MapWrapper.prototype.createMap = function (container, coords, zoom) {
  const map = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

   var circleOptions = {
        center: coords,
        fillOpacity: 0,
        strokeOpacity:0,
        map: map,
        radius: 500
    }
    var myCircle = new google.maps.Circle(circleOptions);
    map.fitBounds(myCircle.getBounds());
    return map;
}


MapWrapper.prototype.aroundMeMap = function(getLocation, locationFailed){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getLocation, locationFailed);
  }
  else{
    alert('you do not have geolocation available on your device');
  }
}

MapWrapper.prototype.addMarker = function (coords, map) {
  const marker = new google.maps.Marker({
    position: coords,
    map: map
    });
  }


MapWrapper.prototype.setRadius = function (coords, radius) {
  var circleOptions = {
       center: coords,
       fillOpacity: 0,
       strokeOpacity:0,
       map: this.map,
       radius: radius
   }
   var myCircle = new google.maps.Circle(circleOptions);
   this.map.fitBounds(myCircle.getBounds());
}

MapWrapper.prototype.centerOnInputCity = function(inputCity){
  var city = inputCity.toString();
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': city}, function(results, status) {
    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

//MapWrapper.prototype.bounceMarker = function (marker) {
//marker.setAnimation(google.maps.Animation.BOUNCE); }

//   const inputCity = document.getElementById("city").value;
module.exports = MapWrapper;
