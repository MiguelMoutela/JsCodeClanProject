/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const Request = function(url) {
  this.url = url;
}

Request.prototype.get = function(callback) {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.addEventListener('load',function(){
    if(this.status!==200){
      return;
    }
    const responseBody= JSON.parse(this.responseText);
    callback(responseBody)
  });
  request.send();
}

Request.prototype.post = function(callback, body) {
  const request = new XMLHttpRequest();
  request.open('POST', this.url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', function(){
    if(this.status != 201) {
      return;
    }
    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  });
  request.send(JSON.stringify(body));
}

Request.prototype.deleteById = function(id, callback) {
  const request = new XMLHttpRequest();
  request.open('DELETE', `${this.url}/:{id}`)
  request.addEventListener('load', function(){
    if(this.status !== 500) {
      return;
    }
    callback();
  });
  request.send()
}

module.exports = Request;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const DisplayChanger = __webpack_require__(4);

const NewPageView = function(){

}

const display = new DisplayChanger();

NewPageView.prototype.clearpage = function(){
  display.classOFF('toggleable');

}

NewPageView.prototype.createHomepage = function(){
  display.displayOn('homepage_top_cont');
  display.displayOn('homepage_sub_top_cont');
  display.displayOn('homepageForm');
}

NewPageView.prototype.createCitySearch = function(){

  display.displayOn('burguer_nav');
  display.displayOn('event_selection_form');
  display.displayOn('searchBox');
  display.displayOff('radius');
  display.displayOff('radius_label');
  display.displayOff('start_date_label');
  display.displayOff('start_date');
  display.displayOff('end_date_label');
  display.displayOff('end_date');
  display.displayOn('main_map');
  display.displayOn('events_table');
}

NewPageView.prototype.createNearSearch = function(){

  display.displayOn('burguer_nav');
  display.displayOn('event_selection_form');
  display.displayOn('searchBox');
  display.displayOn('radius');
  display.displayOn('radius_label');
  display.displayOff('city_label');
  display.displayOff('city');
  display.displayOff('start_date_label');
  display.displayOff('start_date');
  display.displayOff('end_date_label');
  display.displayOff('end_date');
  display.displayOn('main_map');
  display.displayOn('events_table');
}

NewPageView.prototype.createAboutPage = function(){

  display.displayOn('about_container');
  display.displayOn('about_title');
  display.displayOn('about_text');

}

NewPageView.prototype.changeAboutPageElement = function(id,text){

 display.displayOn('about_container');
 document.getElementById(id).innerText = text;

}

NewPageView.prototype.createDbView = function(){

  display.displayOn('burguer_nav');
  display.displayOff('event_selection_form');
  display.displayOff('searchBox');
  display.displayOff('radius');
  display.displayOff('radius_label');
  display.displayOn('main_map');
  display.displayOn('events_table');
}




module.exports = NewPageView;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const FormView = __webpack_require__(3);
const Request = __webpack_require__(0);
const MapWrapper = __webpack_require__(5);
const NewPageView = __webpack_require__(1);
const TableViewer = __webpack_require__(6);


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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const NewPageView = __webpack_require__(1);
const Request = __webpack_require__(0);

const FormView = function(){

}

// const catUrl = "http://api.eventful.com/json/categories/list?app_key=ZpGXZc399XdxLZG9";
// const request = new Request(catUrl);
// // request.get(url);

FormView.prototype.populateDropmenu= function(){
  const select = document.querySelector('#categories_list');
}

module.exports = FormView;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

const DisplayChanger =function(){
}

DisplayChanger.prototype.displayOn = function(id){
  document.getElementById(id).style.display = 'block';
}

DisplayChanger.prototype.displayOff = function(id){
  document.getElementById(id).style.display = 'none';

}

DisplayChanger.prototype.classON = function(id){
  const elements = document.getElementsByClassName(id);
  for (i = 0; i < elements.length; i++) {
    elements[i].style.display = 'block';
  }
}

DisplayChanger.prototype.classOFF = function(id){
  const elements = document.getElementsByClassName(id);
  for (i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }
}
module.exports= DisplayChanger;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

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

MapWrapper.prototype.aroundMe = function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.updateMap(location, 19);
      this.addMarker(location)
    }.bind(this), function() {
      alert('Not worked');
    });
  }
  else{
    alert('you do not have geolocation available on your device');
  }
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.map
  });
}

// MapWrapper.prototype.setRadius = function (coords, radius) {
//   const circleOptions = {
//     center: coords,
//     fillOpacity: 0,
//     strokeOpacity:0,
//     map: this.map,
//     radius: radius
//   }
//   const myCircle = new google.maps.Circle(circleOptions);
//   this.map.fitBounds(myCircle.getBounds());
// }

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
      this.map.setZoom(19);
    };
  }.bind(this));
}

  module.exports = MapWrapper;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(0);



const TableViewer = function(eventsWishList) {
  this.eventsWishList = eventsWishList;
}

// const searchButton = document.querySelector('#search_events');
// searchButton.addEventListener('click', function() {
//   const url =
// })

//const tableViewer = new TableViewer(events);

TableViewer.prototype.render = function(isAddButton) {

  const PopulateTable = function(eventWishList){
    const table = document.querySelector('#table_body');
    eventWishList.forEach(function(event){
      createEventEntryInTable(event, table)
    });
  }

  // Below is the code that creates rows with event info

  const createEventEntryInTable = function(event, table) {
    const tr = document.createElement('tr');
    addEventName(event, tr);
    addEventVenue(event, tr);
    addVenuePostcode(event, tr);
    addEndDate(event, tr);
    addCategory(event, tr);

    if(isAddButton) {
      addAddButton(event,tr);
    } else {
      addDeleteButton(event, tr);
    }
    table.appendChild(tr);
  }

  const addEventName = function(event, tr){
    const eventName = document.createElement('td');
    eventName.innerText = event.title;
    tr.appendChild(eventName);
  }
  const addEventVenue = function(event, tr){
    const venueName = document.createElement('td');
    venueName.innerText = event.venue_name;
    tr.appendChild(venueName);
  }
  const addVenuePostcode = function(event, tr){
    const venuePostcode = document.createElement('td');
    venuePostcode.innerText = event.postal_code;
    tr.appendChild(venuePostcode);
  }
  const addCategory = function(event, tr){
    const category = document.createElement('td');
    // category.innerText = event.categories.category.id;
    tr.appendChild(category);
  }
  const addEndDate = function(event, tr){
    const endDate = document.createElement('td');
    endDate.innerText = event.stop_time;
    tr.appendChild(endDate);
  }

  const addAddButton = function(event, tr){
    const buttonCell = document.createElement('td');
    const button = document.createElement('button')
    button.innerText = 'add';
    button.addEventListener('click', function() {
      const newRequest = new Request('http://localhost:3000/api/EventWishList');
      newRequest.post(function(body) {
      alert('Event added to Wishlist')}, event);
    });
    buttonCell.appendChild(button);
    tr.appendChild(buttonCell);
  }

  const addDeleteButton = function(event, tr){
    const deleteButtonCell = document.createElement('td');
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete';
    deleteButton.addEventListener('click', function() {
      const newRequest = new Request(`http://localhost:3000/api/EventWishList/${event.id}`);
      newRequest.deleteById(event.id);
    });
    //calls that request delete by id))

    // need js method that adds a function to the button
    // so I cam call delete by id on that event
    deleteButtonCell.appendChild(deleteButton);
    tr.appendChild(deleteButtonCell);
  }

  PopulateTable(this.eventsWishList);
}

//tableViewer.render(ture);

// const getSavedEvents = function() {
//   const request = new XMLHttpRequest();
//   request.open('GET', 'http://localhost:3000/api/eventify')
//   request.addEventListener('load', function(){
//     if(this.status !== 200) {
//       return;
//     }
//     const eventWishList = JSON.parse(this.responseText);
//   }
//   request.send()
// }
//

module.exports = TableViewer;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map