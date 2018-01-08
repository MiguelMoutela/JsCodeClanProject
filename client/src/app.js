const FormView = require('./views/formView.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/mapWrapper.js');
const NewPageView = require('./views/newPageView.js');
const TableViewer = require('./views/tableView.js');


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

  const request = new Request('http://api.eventful.com/json/events/search?app_key=ZpGXZc399XdxLZG9&q=comedy');
  request.get(function(page) {
    const tableViewer = new TableViewer(page.events.event);
    tableViewer.render(true);
  });

  const nearSearchButton = document.querySelector('#near_search');
  nearSearchButton.addEventListener('click', nearSearchLoader);

  const aboutPageLoader =function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createAboutPage();

  }

  const aboutPageButton = document.querySelector('#about_view');
  aboutPageButton.addEventListener('click', aboutPageLoader);


  const showCitySearch = function(event){
    event.preventDefault();
    const inputCity = document.querySelector('#city').value;
    mainMap.centerOnInputCity(inputCity);
  }


  const searchButton = document.querySelector('#search_events');
  searchButton.addEventListener('click', showCitySearch);

  const dbViewLoader =function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createDbView();
    // const newRequest = new Request('http://localhost:3000/api/EventWishList');
    // newRequest.get(function(events){
    //   console.log(events);
    //   const tableViewer = new TableViewer(events);
    //   // const table = document.querySelector('#events_table')
    //   tableViewer.render(false  );
    // })
  }

  const dbViewButton = document.querySelector('#db_view');
  dbViewButton.addEventListener('click', dbViewLoader);


  // const tableViewer = new TableViewer();
  // tableViewer.render(false);


}

document.addEventListener('DOMContentLoaded', app);
