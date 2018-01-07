const MapWrapper = function (container, coords, zoom) {
  const map = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

  const marker = new google.maps.Marker({
    position:coords,
    map: map
  })

}

module.exports = MapWrapper;
