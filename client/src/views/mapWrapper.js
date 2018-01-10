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
      this.refresh();
      // this.map.setCenter(location);
      this.updateMap(location, 17);
      this.addPersonMarker(location)
    }.bind(this), function() {
      alert('Not able to find your location');
    });
  }
  else{
    alert('You do not have geolocation available on your device');
  }
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.map,
    animation: google.maps.Animation.DROP
  });
  return marker;
}

MapWrapper.prototype.addMarkerInfoWindow = function(content){

  const infoWindow = new google.maps.InfoWindow(content);

  return infoWindow;

}

MapWrapper.prototype.addPersonMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.map,
    // icon: 'https://maps.google.com/mapfiles/ms/micons/blue-dot.png'
    icon: 'https://maps.google.com/mapfiles/kml/paddle/blu-stars.png'
  });
  return marker;
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
      this.map.setZoom(15);
    };
  }.bind(this));
}


MapWrapper.prototype.displayEventMarkers = function(object) {
  for (i = 0; i < object.events.event.length; i++) {
    const lat = parseFloat(object.events.event[i].latitude);
    const lng = parseFloat(object.events.event[i].longitude);
    const coords = {
      lat: lat,
      lng: lng
    }

    const contentString = object.events.event[i].title + object.events.event[i].description

    const content = {
      content: contentString

    }
    const markerInfo = this.addMarkerInfoWindow(content);

    const marker =  this.addMarker(coords);
    marker.addListener('click', function() {
      markerInfo.open(this.map, marker);
      // const autocomplete = new google.maps.places.autocomplete(DOM_NODE);
      // console.log(autocomplete);
      // autocomplete.bindTo('bounds', this.map);
      // autocomplete.addListener('place_changed', function(){
      //   const place = autocomplete.getPlace();
      // });

      const CalculateAndRenderRoute = function(origin,destination){
        const directionsService = new google.maps.directionsService();
        const  directionsDisplay = new google.maps.DirectionsRenderer();
        request = {
          origin : origin,
          destination: destination

        }

        directionsDisplay.setMap(this.map);
        directionsService.route(request,function(result,status){
          if(status==='OK'){
            directionsDisplay.setDirections(result);
          }

        })

      }
    })
  }
}



module.exports = MapWrapper;
