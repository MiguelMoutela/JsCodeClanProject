const FormView = require('./views/formView.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/mapWrapper.js');
const NewPageView = require('./views/newPageView.js');


const app = function(){
  const homepage = new NewPageView();
  homepage.createHomepage();
  const mainMap = new MapWrapper();

  // homepage.createCitySearch();
  // homepage.createNearSearch();
  // homepage.createAboutPage();
  // homepage.changeAboutPageElement("about_text","this is a test for changeAboutPageElement() ");

  const mapContainer = document.querySelector('#main_map');
  const sucess = function(position){
    const location = {
      lat: 0.0,
      lng: 0.0
    };
    const map = mainMap.createMap(mapContainer, location, 3);
    const mark = mainMap.addMarker(location, map);
  }

  const sucess1 = function(position){
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    const map = mainMap.createMap(mapContainer, location, 15);
    const mark = mainMap.addMarker(location, map);
  }

  const error = function(){
    alert("Error occured. We did not get your location");
  }

 const aroundMe = new MapWrapper();
 aroundMe.aroundMeMap(sucess,error);


  const citySearchLoader =function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createCitySearch();
  }

  const citySearchButton = document.querySelector('#city_search');
  citySearchButton.addEventListener('click', citySearchLoader);

  const nearSearchLoader =function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createNearSearch();

  }

  const nearSearchButton = document.querySelector('#near_search');
  nearSearchButton.addEventListener('click', nearSearchLoader);


  const aboutPageLoader =function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createAboutPage();

  }

  const aboutPageButton = document.querySelector('#about_view');
  aboutPageButton.addEventListener('click', aboutPageLoader);

  // TODO create the button function for db and callback!



const showCitySearch = function(event){
  event.preventDefault();
  const inputCity = document.querySelector('#city').value;

  const location = {
    lat: 0,
    lng: 0
  };

  const map = mainMap.createMap(mapContainer, location, 15);
  mainMap.centerOnInputCity(inputCity, map)
  //const test = new MapWrapper();
  //test.centerOnInputCity(inputCity);
  // const newSearch = new NewPageView();
  // newSearch.clearpage();
  // newSearch.createCitySearch();


}
  const searchButton = document.querySelector('#search_events');
    searchButton.addEventListener('click', showCitySearch)




    // function() {
    //   const inputCity = document.querySelector('#city').value;
    //   mainMap.centerOnInputCity(inputCity, mainMap);
    // });
}

document.addEventListener('DOMContentLoaded', app);
