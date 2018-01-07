const MapWrapper = function (container, coords, zoom) {
  const map = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
  const youAreHereMarker = new google.maps.Marker({
    position: coords,
    map: map
    });
  this.markers.push(youAreHereMarker);

   var circleOptions = {
        center: coords,
        fillOpacity: 0,
        strokeOpacity:0,
        map: map,
        radius: 500
    }
    var myCircle = new google.maps.Circle(circleOptions);
    map.fitBounds(myCircle.getBounds());
}

MapWrapper.prototype.addMarker = function (coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.map
    });
    this.markers.push(marker)
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

//centering map on the city from the input box

  //const inputCity = document.getElementById("city").value;

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
