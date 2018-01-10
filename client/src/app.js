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

  const mainMap = new MapWrapper(mapContainer, defaultLocation, 3 );


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
  }


  const searchButton = document.querySelector('#search_city_button');
  searchButton.addEventListener('click', showCitySearch);



  //NOTE following two functions deal with search around me button on form

  const aroundMeSearch = function(event){
    event.preventDefault();
    formView.searchAroundMe(mainMap);
  }


  const aroundMeSearchButton = document.querySelector('#search_around_me_button');
  aroundMeSearchButton.addEventListener('click', aroundMeSearch);

//   const navCitySearchButton = document.querySelector('#city-nav');
//   navCitySearchButton.addEventListener('click', function(){
//   testLoader();
//   console.log('hi');
// });

  const homepageButton = document.querySelector('#home-nav');
  homepageButton.addEventListener('click', function(){
    const newHomepage = new NewPageView();
    newHomepage.clearpage();
    newHomepage.createHomepage();

  });

  const cityButton = document.querySelector('#city-nav');
  cityButton.addEventListener('click', citySearchLoader);

  const nearSearchButton = document.querySelector('#aroundMe-nav');
  nearSearchButton.addEventListener('click', nearSearchLoader);

  const dbButton = document.querySelector('#myEvents-nav');
  dbButton.addEventListener('click', dbViewLoader);

  const aboutButton = document.querySelector('#about-nav');
  aboutButton.addEventListener('click', aboutPageLoader);

  // NOTE not sure what this request to get all events with cat comedy was used for...

  // const request = new Request('http://api.eventful.com/json/events/search?app_key=ZpGXZc399XdxLZG9&q=comedy');
  // request.get(function(page) {
  //   const tableViewer = new TableViewer(page.events.event);
  //   tableViewer.render(true);
  // });



  // const tableViewer = new TableViewer();
  // tableViewer.render(false);
}

document.addEventListener('DOMContentLoaded', app);
