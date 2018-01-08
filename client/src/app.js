const FormView = require('./views/formView.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/mapWrapper.js');
const NewPageView = require('./views/newPageView.js');


const app = function(){
  const homepage = new NewPageView();
  homepage.createHomepage();
  // homepage.createCitySearch();
  // homepage.createNearSearch();
  // homepage.createAboutPage();
  // homepage.changeAboutPageElement("about_text","this is a test for changeAboutPageElement() ");

  const mapContainer = document.querySelector('#main_map');
  const sucess = function(position){
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    const mainMap = new MapWrapper();
    mainMap.createMap(mapContainer, location, 15);

    // mainMap.addMarker(location);
  }


  const error = function(){
    alert("Error occured. We did not get your location");
  }

  // const userlocation = new UserLocation();
  // userlocation.getLocation(sucess, error);
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




}


//this is executing the alert even though the button has not been clicked
// var searchButton = document.querySelector('#search-events');
// //var inputCity = document.querySelector('#city').value;
// searchButton.addEventListener('click', alert(inputCity));


document.addEventListener('DOMContentLoaded', app);
// var inputCity = document.querySelector('#city').value;
