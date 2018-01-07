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
}

MapWrapper.prototype.addMarker = function (coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.map
    });
    this.markers.push(marker)
  }

const inputRadius = document.getElementById("radius").value;
const inputCity = document.getElementById("city").value;


module.exports = MapWrapper;
