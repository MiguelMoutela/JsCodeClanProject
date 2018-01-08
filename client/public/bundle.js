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




module.exports = NewPageView;


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const FormView = __webpack_require__(3);
const Request = __webpack_require__(1);
const MapWrapper = __webpack_require__(5);
const NewPageView = __webpack_require__(0);


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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const NewPageView = __webpack_require__(0);
const Request = __webpack_require__(1);

const FormView = function(){

}

const url = "http://api.eventful.com/json/categories/list?app_key=ZpGXZc399XdxLZG9";
const request = new Request(url);
// request.get(url);

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

const MapWrapper = function (){

}
// (container, coords, zoom) {
//   const map = new google.maps.Map(container, {
//     center: coords,
//     zoom: zoom
//   });
//   this.markers = [];
//   // const youAreHereMarker = new google.maps.Marker({
//   //   position: coords,
//   //   map: map
//   //   });
//   // this.markers.push(youAreHereMarker);
//
//    var circleOptions = {
//         center: coords,
//         fillOpacity: 0,
//         strokeOpacity:0,
//         map: map,
//         radius: 500
//     }
//     var myCircle = new google.maps.Circle(circleOptions);
//     map.fitBounds(myCircle.getBounds());
// }

MapWrapper.prototype.createMap = function (container, coords, zoom) {
  const map = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
  // const youAreHereMarker = new google.maps.Marker({
  //   position: coords,
  //   map: map
  //   });
  // this.markers.push(youAreHereMarker);

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


MapWrapper.prototype.aroundMeMap = function(getLocation, locationFailed){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getLocation, locationFailed);
  }
  else{
    alert('you do not have geolocation available on your device');
  }
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

//centering map on the city from the input box


//const inputCity = document.getElementById("city").value needs to be captured
// at some point, however to no avail

MapWrapper.prototype.centerOnInputCity = function(inputCity){
  var city = inputCity.toString();
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': city}, function(results, status) {
    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}






//MapWrapper.prototype.bounceMarker = function (marker) {
//marker.setAnimation(google.maps.Animation.BOUNCE); }

//   const inputCity = document.getElementById("city").value;







module.exports = MapWrapper;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map