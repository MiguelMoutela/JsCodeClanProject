const app = function(){
  // const center = {
  //     lat: 55.946962,
  //     lng: -3.20195
  // }

  const mapContainer = document.querySelector('#main-map');
  const mainMap = new MapWrapper(mapContainer, center, 25);
  mainMap.whereAmI();
  console.log(this.location);
}

document.addEventListener('DOMContentLoaded', app);
