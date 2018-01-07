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

const app = function(){

  const mapContainer = document.querySelector('#main-map');

  const sucess = function(position){
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    const mainMap = new MapWrapper(mapContainer, location, 15);
  }

  const error = function(){
    alert("Error occured. We did not get your location");
  }

  const userlocation = new UserLocation();
  userlocation.getLocation(sucess, error);
}

document.addEventListener('DOMContentLoaded', app);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const newPageView = __webpack_require__(3);
const request = __webpack_require__(0);

// const newBody= new newPageView();
// not sure if I shpould put this variable out or just call it on each function

const FormView = function(){

}

FormView.prototype.viewCitySearch= function(){
 const newBody= new NewPageView();
 newBody.resetPage;
 const form = document.querySelector('#event-selection-form');
 const request = new Request('http://localhost:3000/map.html')




}

module.exports = FormView;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const NewPageView = function(){

}

NewPageView.prototype.resetPage= function(){
  const body = document.querySelector('#body_container');
    body.innerHTML = '';

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
  this.markers = [];
  const youAreHereMarker = new google.maps.Marker({
    position: coords,
    map: map
    });
  this.markers.push(youAreHereMarker);

  var circleOptions = {
       center: coords,
       fillOpacity: 0,
       strokeOpacity:0,
       map: map,
       radius: 500 
   }
   var myCircle = new google.maps.Circle(circleOptions);
   map.fitBounds(myCircle.getBounds());
}

MapWrapper.prototype.addMarker = function (coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.map
    });
    this.markers.push(marker)
  }

MapWrapper.prototype.setRadius = function (coords, radius) {
  var circleOptions = {
       center: coords,
       fillOpacity: 0,
       strokeOpacity:0,
       map: this.map,
       radius: radius
   }
   var myCircle = new google.maps.Circle(circleOptions);
   this.map.fitBounds(myCircle.getBounds());
}



//   const inputCity = document.getElementById("city").value;







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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map