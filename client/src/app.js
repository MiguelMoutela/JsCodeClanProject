const FormView = require('./views/formView.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/mapWrapper.js');
const NewPageView = require('./views/newPageView.js');


const app = function(){
  const homepage = new NewPageView();
  homepage.createHomepage();

  const mapContainer = document.querySelector('#main_map');


  const defaultLocation = {
      lat: 0.0,
      lng: 0.0
    };

  const mainMap = new MapWrapper(mapContainer, defaultLocation, 3 );

  const citySearchLoader =function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createCitySearch();
    mainMap.refresh();
    mainMap.updateMap(defaultLocation, 3);
  }

  const citySearchButton = document.querySelector('#city_search');
  citySearchButton.addEventListener('click', citySearchLoader);

  const nearSearchLoader =function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createNearSearch();
    mainMap.refresh();
    mainMap.aroundMe();
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
  mainMap.centerOnInputCity(inputCity)

}
  const searchButton = document.querySelector('#search_events');
    searchButton.addEventListener('click', showCitySearch)

}

document.addEventListener('DOMContentLoaded', app);
