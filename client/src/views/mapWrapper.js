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
  const circleOptions = {
    center: coords,
    fillOpacity: 0,
    strokeOpacity:0,
    map: this.map,
    radius: radius
  }
  const myCircle = new google.maps.Circle(circleOptions);
  this.map.fitBounds(myCircle.getBounds());
}

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

      map.setCenter(cityLocation);
      // const container = document.querySelector('#main_map');
      // const mainMap = new MapWrapper();
      // const map = mainMap.createMap(container,cityLocation,10);
      // mainMap.addMarker(location,map);

    };
  });
}









  //MapWrapper.prototype.bounceMarker = function (marker) {
  //marker.setAnimation(google.maps.Animation.BOUNCE); }

  //   const inputCity = document.getElementById("city").value;
  module.exports = MapWrapper;
