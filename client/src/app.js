const FormView = require('./views/formView.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/mapWrapper.js');
const NewPageView = require('./views/newPageView.js');
const TableViewer = require('./views/tableView.js');
const DbView = require('./views/dbView.js');


const app = function(){
  const homepage = new NewPageView();
  homepage.createHomepage();


  // NOTE the following  functions and variables render a
  //default map that will updated as pages load

  const mapContainer = document.querySelector('#main_map');

  const defaultLocation = {
    lat: 0.0,
    lng: 0.0
  };

  let mainMap = new MapWrapper(mapContainer, defaultLocation, 3 );

  // NOTE creating a new formview to call formview functions//

  const formView = new FormView();

  // NOTE the following two functions are related to the
  //search by city button  on homepage

  const citySearchLoader =function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createCitySearch();
    mainMap.refresh();
    mainMap.updateMap(defaultLocation, 3);
  }

  const citySearchButton = document.querySelector('#city_search');
  citySearchButton.addEventListener('click', citySearchLoader);

  // NOTE the following two functions are related to the
  //search around button  me  on homepage

  const nearSearchLoader = function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createNearSearch();
    // mainMap.refresh();
    mainMap.aroundMe();
  }

  const aroundMehomepageButton = document.querySelector('#near_search');
  aroundMehomepageButton.addEventListener('click', nearSearchLoader);

  // NOTE the following two functions are related to the
  //view database button  on homepage

  const dbViewLoader =function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createDbView();
    const dbMap = new DbView();
    dbMap.renderDbMap();
    const newRequest = new Request('http://localhost:3000/api/EventWishList');
    newRequest.get(function(events){
      const tableViewer = new TableViewer(events);
      tableViewer.render(false);
    })
  }

  const dbViewButton = document.querySelector('#db_view');
  dbViewButton.addEventListener('click', dbViewLoader);

  // NOTE the following two functions are related to the
  //about button  on homepage

  const aboutPageLoader =function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createAboutPage();
   homepage.changeAboutPageElement('about_title','About');
   homepage.changeAboutPageElement('about_text','Eventify 1.0\n Created by:\n Hamish, Joao, Marta and Miguel AKA Team Fantastic');
  }

  const aboutPageButton = document.querySelector('#about_view');
  aboutPageButton.addEventListener('click', aboutPageLoader);

  // NOTE the following two functions are related to the
  //search button on the search form

  const showCitySearch = function(event){
    event.preventDefault();
    const inputCity = document.querySelector('#city').value;
    mainMap.centerOnInputCity(inputCity);
    formView.searchByCity(mainMap);
    const table = document.querySelector('#table_body');
    table.innerHTML = '';
  }

  const searchButton = document.querySelector('#search_city_button');
  searchButton.addEventListener('click', showCitySearch);

  //NOTE following two functions deal with search around me button on form

  const aroundMeSearch = function(event){
    event.preventDefault();
    formView.searchAroundMe(mainMap);
    const newtable = document.querySelector('#table_body');
    newtable.innerHTML = '';
  }

  const aroundMeSearchButton = document.querySelector('#search_around_me_button');
  aroundMeSearchButton.addEventListener('click', aroundMeSearch);

  const homepageButton = document.querySelector('#home-nav');
  homepageButton.addEventListener('click', function(){
    const newHomepage = new NewPageView();
    newHomepage.clearpage();
    newHomepage.createHomepage();
  });

  const cityButton = document.querySelector('#city-nav');
  cityButton.addEventListener('click', function(){
    const table = document.querySelector('#table_body');
    table.innerHTML = '';
    const newHomepage = new NewPageView();
    newHomepage.clearpage();
    newHomepage.createCitySearch();
    const cityButton = document.querySelector('#search_city_button');
    cityButton.style.display='block';
    mainMap = new MapWrapper(mapContainer, defaultLocation, 3 );
  });

  const nearSearchButton = document.querySelector('#aroundMe-nav');
  nearSearchButton.addEventListener('click', function(){
    const table = document.querySelector('#table_body');
    table.innerHTML = '';
    const newHomepage = new NewPageView();
    newHomepage.clearpage();
    newHomepage.createNearSearch();
    const aroundMeButton = document.querySelector('#search_around_me_button');
    aroundMeButton.style.display='block';
    mainMap = new MapWrapper(mapContainer, defaultLocation, 3 );
    mainMap.aroundMe();
  });

  const dbButton = document.querySelector('#myEvents-nav');
  dbButton.addEventListener('click', function(){
    const table = document.querySelector('#table_body');
    table.innerHTML = '';
    const newHomepage = new NewPageView();
    newHomepage.clearpage();
    newHomepage.createDbView();
    const dbMap = new DbView();
    dbMap.renderDbMap();
    const newRequest = new Request('http://localhost:3000/api/EventWishList');
    newRequest.get(function(events){
      const tableViewer = new TableViewer(events);
      tableViewer.render(false);
    })
  });

  const aboutButton = document.querySelector('#about-nav');
  aboutButton.addEventListener('click', function(){
    const newHomepage = new NewPageView();
    newHomepage.clearpage();
    newHomepage.createAboutPage();
    newHomepage.changeAboutPageElement('about_title','About');
    newHomepage.changeAboutPageElement('about_text','Eventify 1.0\n Created by:\n Hamish, Joao, Marta and Miguel AKA Team Fantastic');

  });
}

document.addEventListener('DOMContentLoaded', app);
