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

MapWrapper.prototype.clearMarkers = function(){
  this.markers.forEach(function(marker){
    marker.setMap(null);
  })
this.markers= [];
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

    });
  }
}

//NOTE this is code for a possible way of calculating route
    // marker.addListener('dblclick', function() {
    //   var directionsDisplay = new google.maps.DirectionsRenderer();
    //   var directionsService = new google.maps.DirectionsService();
    //   // arrays to hold copies of the markers and html used by the side_bar
    //   // because the function closure trick doesnt work there
    //   var gmarkers = [];
    //   var htmls = [];
    //
    //   // arrays to hold variants of the info window html with get direction forms open
    //   var to_htmls = [];
    //   var from_htmls = [];
    //
    //   // global "map" variable
    //   var map = null;
    //
    //   var infowindow = new google.maps.InfoWindow({
    //     size: new google.maps.Size(150, 50)
    //   });
    //
    //   function initialize() {
    //
    //     var location = new google.maps.LatLng(50.871622, -4.131561);
    //
    //     var mapOptions = {
    //       center: location,
    //       zoom: 11,
    //       scrollwheel: false
    //     };
    //
    //     map = new google.maps.Map(document.getElementById("map"),
    //     mapOptions);
    //
    //     directionsDisplay.setMap(map);
    //     directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    //     google.maps.event.addListener(map, 'click', function() {
    //       infowindow.close();
    //     });
    //
    //     var image = {
    //       url: 'http://maps.google.com/mapfiles/ms/micons/blue.png'
    //     };
    //     var marker = new google.maps.Marker({
    //       position: location,
    //       map: map,
    //       animation: google.maps.Animation.DROP,
    //       icon: image,
    //       title: 'Deer Park Dairy'
    //     });
    //
    //     var i = gmarkers.length;
    //     latlng = location;
    //
    //     // The info window version with the "to here" form open
    //     to_htmls[i] = html + '<br>Directions: <b>To here<\/b> - <a href="javascript:fromhere(' + i + ')">From here<\/a>' +
    //     '<br>Start address:<form action="javascript:getDirections()">' +
    //     '<input type="text" SIZE=40 MAXLENGTH=40 name="saddr" id="saddr" value="" /><br>' +
    //     '<INPUT value="Get Directions" TYPE="button" onclick="getDirections()"><br>' +
    //     'Walk <input type="checkbox" name="walk" id="walk" /> &nbsp; Avoid Highways <input type="checkbox" name="highways" id="highways" />' +
    //     '<input type="hidden" id="daddr" value="' + latlng.lat() + ',' + latlng.lng() +
    //     '"/>';
    //     // The info window version with the "from here" form open
    //     from_htmls[i] = html + '<br>Directions: <a href="javascript:tohere(' + i + ')">To here<\/a> - <b>From here<\/b>' +
    //     '<br>End address:<form action="javascript:getDirections()">' +
    //     '<input type="text" SIZE=40 MAXLENGTH=40 name="daddr" id="daddr" value="" /><br>' +
    //     '<INPUT value="Get Directions" TYPE="SUBMIT"><br>' +
    //     'Walk <input type="checkbox" name="walk" id="walk" /> &nbsp; Avoid Highways <input type="checkbox" name="highways" id="highways" />' +
    //     '<input type="hidden" id="saddr" value="' + latlng.lat() + ',' + latlng.lng() +
    //     '"/>';
    //     // The inactive version of the direction info
    //     var html = marker.getTitle() + '<br>Directions: <a href="javascript:tohere(' + i + ')">To here<\/a> - <a href="javascript:fromhere(' + i + ')">From here<\/a>';
    //     var contentString = html;
    //
    //     google.maps.event.addListener(marker, 'click', function() {
    //       map.setZoom(15);
    //       map.setCenter(marker.getPosition());
    //       infowindow.setContent(contentString);
    //       infowindow.open(map, marker);
    //     });
    //     // save the info we need to use later for the side_bar
    //     gmarkers.push(marker);
    //     htmls[i] = html;
    //   }
    //
    //   google.maps.event.addDomListener(window, 'load', initialize);
    //
    //   // ===== request the directions =====
    //   function getDirections() {
    //     // ==== Set up the walk and avoid highways options ====
    //     var request = {};
    //     if (document.getElementById("walk").checked) {
    //       request.travelMode = google.maps.DirectionsTravelMode.WALKING;
    //     } else {
    //       request.travelMode = google.maps.DirectionsTravelMode.DRIVING;
    //     }
    //
    //     if (document.getElementById("highways").checked) {
    //       request.avoidHighways = true;
    //     }
    //     // ==== set the start and end locations ====
    //     var saddr = document.getElementById("saddr").value;
    //     var daddr = document.getElementById("daddr").value;
    //
    //     request.origin = saddr;
    //     request.destination = daddr;
    //     directionsService.route(request, function(response, status) {
    //       if (status == google.maps.DirectionsStatus.OK) {
    //         directionsDisplay.setDirections(response);
    //       } else alert("Directions not found:" + status);
    //     });
    //   }
    //   function myclick(i) {
    //     google.maps.event.trigger(gmarkers[i], "click");
    //   }
    //
    //
    //   // functions that open the directions forms
    //   function tohere(i) {
    //     // gmarkers[i].openInfoWindowHtml(to_htmls[i]);
    //     infowindow.setContent(to_htmls[i]);
    //     infowindow.open(map, gmarkers[i]);
    //   }
    //
    //   function fromhere(i) {
    //     // gmarkers[i].openInfoWindowHtml(from_htmls[i]);
    //     infowindow.setContent(from_htmls[i]);
    //     infowindow.open(map, gmarkers[i]);
    //   }
    //
    // });







module.exports = MapWrapper;
