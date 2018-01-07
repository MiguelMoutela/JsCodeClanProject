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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

module.exports = Request;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const FormView = __webpack_require__(2);
const Request = __webpack_require__(0);
const MapWrapper = __webpack_require__(4);
const UserLocation = __webpack_require__(5);
const NewPageView = __webpack_require__(3);


const app = function(){



  const mapContainer = document.querySelector('#main_map');
  const sucess = function(position){
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    const mainMap = new MapWrapper(mapContainer, location, 7);

  }

  const error = function(){
    alert("Error occured. We did not get your location");
  }

  const userlocation = new UserLocation();
  userlocation.getLocation(sucess, error);

  const homepage = new NewPageView();
  // homepage.createHomepage();
  // homepage.createCitySearch();
  homepage.createNearSearch();


// const citySearchForm = new FormView();
// citySearchForm.viewCitySearch();

}

document.addEventListener('DOMContentLoaded', app);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const NewPageView = __webpack_require__(3);
const Request = __webpack_require__(0);

// const newBody= new newPageView();
// not sure if I shpould put this variable out or just call it on each function

const FormView = function(){

}

FormView.prototype.viewCitySearch= function(){

  const form = document.querySelector("#event-selection-form");

form.style.display = "block";
console.log(form);


 // const form = document.getElementById('event-selection-form');
 // form.display = 'block';
 const radius = document.getElementById('radius');
 radius.style.display = 'block';
 console.log(radius);

 // form;
 // const inputBox = document.querySelector('#city');
 // const dropmenu = document.querySelector('#categories-list');
 // const searchBttn = document.querySelector('#search-events');
 //
 //

 // const request = new Request('http://localhost:3000/map.html')




}

module.exports = FormView;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const DisplayChanger = __webpack_require__(6);

const NewPageView = function(){

}

const display = new DisplayChanger();

NewPageView.prototype.createHomepage = function(){
  // const display = new DisplayChanger();

  display.displayOn('homepage_top_cont');
  display.displayOn('homepage_sub_top_cont');
  display.displayOn('homepageForm');
}

NewPageView.prototype.createCitySearch = function(){

  display.displayOn('burguer_nav');
  display.displayOn('searchBox');
  display.displayOff('radius');
  display.displayOff('radius_label');
  display.displayOn('main_map');
  display.displayOn('events_table');
}

NewPageView.prototype.createNearSearch = function(){

  display.displayOn('burguer_nav');
  display.displayOn('searchBox');
  display.displayOn('radius');
  display.displayOn('radius_label');
  display.displayOff('city_label');
  display.displayOff('city');
  display.displayOn('main_map');
  display.displayOn('events_table');
}





module.exports = NewPageView;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

const UserLocation = function(){

}

UserLocation.prototype.getLocation = function(getLocation, locationFailed){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getLocation, locationFailed);
  }
  else{
    alert('you do not have geolocation available on your device');
  }
}

module.exports = UserLocation;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

const DisplayChanger =function(){
}

DisplayChanger.prototype.displayOn = function(id){
  document.getElementById(id).style.display = 'block';
// document.getElementById(id).style.removeProperty( 'display' );
// const change = element.style.display= "block";
}

DisplayChanger.prototype.displayOff = function(id){
  document.getElementById(id).style.display = 'none';

}

module.exports= DisplayChanger;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map