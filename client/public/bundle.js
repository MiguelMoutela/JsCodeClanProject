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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const FormView = __webpack_require__(3);
const Request = __webpack_require__(1);
const MapWrapper = __webpack_require__(5);
const UserLocation = __webpack_require__(6);
const NewPageView = __webpack_require__(0);
const TableViewer = __webpack_require__(7);


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
    const mainMap = new MapWrapper(mapContainer, location, 15);
  }

  const error = function(){
    alert("Error occured. We did not get your location");
  }

  const userlocation = new UserLocation();
  userlocation.getLocation(sucess, error);

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

const tableViewer = new TableViewer();
tableViewer.render(false);


}

document.addEventListener('DOMContentLoaded', app);


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
}

MapWrapper.prototype.addMarker = function (coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.map
    });
    this.markers.push(marker)
  }


module.exports = MapWrapper;


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const request = __webpack_require__(1);

const TableViewer = function(eventsWishList) {
  this.eventsWishList = [
			{
				"watching_count": null,
				"olson_path": "America/New_York",
				"calendar_count": null,
				"comment_count": null,
				"region_abbr": "CT",
				"postal_code": null,
				"going_count": null,
				"all_day": "0",
				"latitude": "41.2905210",
				"groups": null,
				"url": "http://eventful.com/oldsaybrook/events/irish-comedy-tour-/E0-001-097952900-8?utm_source=apis&utm_medium=apim&utm_campaign=apic",
				"id": "E0-001-097952900-8",
				"privacy": "1",
				"city_name": "Old Saybrook",
				"link_count": null,
				"longitude": "-72.3753170",
				"country_name": "United States",
				"country_abbr": "USA",
				"region_name": "Connecticut",
				"start_time": "2018-03-15 19:30:00",
				"tz_id": null,
				"description": " <p><p>The Irish Comedy Tour takes the party atmosphere of a Dublin pub and combines it with a boisterous, belly-laugh band of hooligans.  The clover -- make that clever -- comedians, whose ancestors hail from the Emerald Isle.</p></p>",
				"modified": "2017-11-18 11:22:39",
				"venue_display": "1",
				"tz_country": null,
				"performers": {
					"performer": {
						"creator": "TheJoveImprov",
						"linker": "evdb",
						"name": "The Irish Comedy Tour",
						"url": "http://eventful.com/performers/the-irish-comedy-tour-/P0-001-000221096-5?utm_source=apis&utm_medium=apim&utm_campaign=apic",
						"id": "P0-001-000221096-5",
						"short_bio": "THREE IRISH COMICS, ONE NIGHT.  An evening of raucous stand up comedy."
					}
				},
				"title": "The Irish Comedy Tour",
				"venue_address": "300 Main Street",
				"geocode_type": "EVDB Geocoder",
				"tz_olson_path": null,
				"recur_string": null,
				"calendars": null,
				"owner": "evdb",
				"going": null,
				"country_abbr2": "US",
				"image": {
					"small": {
						"width": "48",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/small/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "48"
					},
					"width": "48",
					"caption": null,
					"medium": {
						"width": "128",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/medium/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "128"
					},
					"url": "http://d1marr3m5x4iac.cloudfront.net/images/small/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
					"thumb": {
						"width": "48",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/thumb/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "48"
					},
					"height": "48"
				},
				"created": "2016-11-19 09:10:48",
				"venue_id": "V0-001-002359050-1",
				"tz_city": null,
				"stop_time": "22:00",
				"venue_name": "Katharine Hepburn Cultural Arts Center",
				"venue_url": "http://eventful.com/oldsaybrook/venues/katharine-hepburn-cultural-arts-center-/V0-001-002359050-1?utm_source=apis&utm_medium=apim&utm_campaign=apic"
			},
			{
				"watching_count": null,
				"olson_path": "America/New_York",
				"calendar_count": null,
				"comment_count": null,
				"region_abbr": "NY",
				"postal_code": "10566",
				"going_count": null,
				"all_day": "0",
				"latitude": "41.2899323",
				"groups": null,
				"url": "http://eventful.com/peekskill/events/irish-comedy-tour-/E0-001-107269265-7?utm_source=apis&utm_medium=apim&utm_campaign=apic",
				"id": "E0-001-107269265-7",
				"privacy": "1",
				"city_name": "Peekskill",
				"link_count": null,
				"longitude": "-73.9196349",
				"country_name": "United States",
				"country_abbr": "USA",
				"region_name": "New York",
				"start_time": "2018-03-16 20:00:00",
				"tz_id": null,
				"description": " <p>The Irish Comedy Tour takes the party atmosphere of a Dublin pub and combines it with a boisterous, belly-laugh band of hooligans.<p>The clover — make that clever — comedians, whose ancestors hail from the Emerald Isle, include Detroit native Derek Richards; Boston-born Mike McCarthy; Nova Scotia’s Damon Leibert; and from Inchicore, a suburb of Dublin, Ireland Derrick Keane.<p>Audiences howl at Richards’ tales about his mom’s dog, the holidays and dating a stripper. He has appeared on The Bob & Tom Show, XM and Sirius, and The Weather Channel’s Top 10.<p>McCarthy’s no-holds-barred humor has landed him on Comedy Central and Showtime. The “comedy barbarian,” as he calls himself, takes no prisoners when it comes to poking fun at society’s most sensitive topics.<p>Leibert’s unique and energetic style of fiddle playing lies somewhere between the driving dance beat of Cape Breton, and the lyrical music of Ireland. His power packed performance adds an incredible dimension to the show.<p>And finally Keane, originally from Inchicore, Derrick first distinguished himself musically when the duo in which he sang and played swept the All Ireland Talent Competition. His band, Inchicore, sets the gold standard for the Irish music scene in New England and across North America.<p>Don’t miss these hilarious Irish American comedians as they tear apart as well as validate all of the Irish myths and stereotypes.</p></p></p></p></p></p></p>",
				"modified": "2017-09-30 20:31:32",
				"venue_display": "1",
				"tz_country": null,
				"performers": {
					"performer": {
						"creator": "TheJoveImprov",
						"linker": "evdb",
						"name": "The Irish Comedy Tour",
						"url": "http://eventful.com/performers/the-irish-comedy-tour-/P0-001-000221096-5?utm_source=apis&utm_medium=apim&utm_campaign=apic",
						"id": "P0-001-000221096-5",
						"short_bio": "THREE IRISH COMICS, ONE NIGHT.  An evening of raucous stand up comedy."
					}
				},
				"title": "The Irish Comedy Tour",
				"venue_address": "1008 Brown Street",
				"geocode_type": "EVDB Geocoder",
				"tz_olson_path": null,
				"recur_string": null,
				"calendars": null,
				"owner": "evdb",
				"going": null,
				"country_abbr2": "US",
				"image": {
					"small": {
						"width": "48",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/small/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "48"
					},
					"width": "48",
					"caption": null,
					"medium": {
						"width": "128",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/medium/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "128"
					},
					"url": "http://d1marr3m5x4iac.cloudfront.net/images/small/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
					"thumb": {
						"width": "48",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/thumb/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "48"
					},
					"height": "48"
				},
				"created": "2017-09-30 20:31:32",
				"venue_id": "V0-001-000361529-1",
				"tz_city": null,
				"stop_time": null,
				"venue_name": "Paramount Hudson Valley",
				"venue_url": "http://eventful.com/peekskill/venues/paramount-hudson-valley-/V0-001-000361529-1?utm_source=apis&utm_medium=apim&utm_campaign=apic"
			}
		];
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
    });
    //calls that request delete by id))

    // need js method that adds a function to the button
    // so I cam call delete by id on that event
    buttonCell.appendChild(button);
    tr.appendChild(buttonCell);
  }

  const addDeleteButton = function(event, tr){
    const deleteButtonCell = document.createElement('td');
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete';
    deleteButton.addEventListener('click', function() {
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