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

Request.prototype.delete = function(callback) {
  const request = new XMLHttpRequest();
  request.open('DELETE', this.url)
  request.addEventListener('load', function(){
    if(this.status !== 204) {
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
  display.displayOff('search_around_me_button');
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
  display.displayOff('search_city_button');
  display.displayOn('main_map');
  display.displayOn('events_table');
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const FormView = __webpack_require__(3);
const Request = __webpack_require__(0);
const MapWrapper = __webpack_require__(5);
const NewPageView = __webpack_require__(1);
const TableViewer = __webpack_require__(6);
const DbView = __webpack_require__(7);


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

  const nearSearchLoader =function(){
    const newSearch = new NewPageView();
    newSearch.clearpage();
    newSearch.createNearSearch();
    // mainMap.refresh();
    mainMap.aroundMe();
  }

  const nearSearchButton = document.querySelector('#near_search');
  nearSearchButton.addEventListener('click', nearSearchLoader);


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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const NewPageView = __webpack_require__(1);
const Request = __webpack_require__(0);
const TableView = __webpack_require__(6);
const MapWrapper = __webpack_require__(5)




const FormView = function(){

}


FormView.prototype.searchByCity= function(mainMap){

  const inputCity = document.querySelector('#city').value;

  const categoryList = document.querySelector('#categories_list');

  const categorySelected= categoryList.value;

  const searchUrl = `http://localhost:3000/api/citysearch/${inputCity}/${categorySelected}`;

  const request = new Request(searchUrl);


  request.get(function(object){
    
    if(object.events === null) {
      alert("There are no events listed.")
    } else
    {
      mainMap.displayEventMarkers(object);}
      const table = new TableView(object);
      table.render(true);
    });

  }


  FormView.prototype.searchAroundMe= function(mainMap){

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat= position.coords.latitude;
        const lng= position.coords.longitude;

        const categoryList = document.querySelector('#categories_list');

        const categorySelected= categoryList.value;


        const radius = document.querySelector('#radius').value;

        const searchUrl = `http://localhost:3000/api/aroundMeSearch/${lat}/${lng}/${radius}/${categorySelected}`;

        const request = new Request(searchUrl);

        request.get(function(object){
          if(object.events === null) {
            alert("There are no events listed.")
          } else{
            mainMap.displayEventMarkers(object);
            const table = new TableView(object);
            table.render(true);

          }
        })

      }, function() {
        alert('Not able to get your location');
      });
    }
    else{
      alert('You do not have geolocation available on your device');
    }
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
      this.refresh();
      // this.map.setCenter(location);
      this.updateMap(location, 17);
      this.addPersonMarker(location)
    }.bind(this), function() {
      alert('Not able to find your location');
    });
  }
  else{
    alert('You do not have geolocation available on your device');
  }
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.map,
    animation: google.maps.Animation.DROP
  });
  return marker;
}

MapWrapper.prototype.addMarkerInfoWindow = function(content){

  const infoWindow = new google.maps.InfoWindow(content);

  return infoWindow;

}

MapWrapper.prototype.addPersonMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.map,
    // icon: 'https://maps.google.com/mapfiles/ms/micons/blue-dot.png'
    icon: 'https://maps.google.com/mapfiles/kml/paddle/blu-stars.png'
  });
  return marker;
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
      this.map.setZoom(15);
    };
  }.bind(this));
}


MapWrapper.prototype.displayEventMarkers = function(object) {
  for (i = 0; i < object.events.event.length; i++) {
    const lat = parseFloat(object.events.event[i].latitude);
    const lng = parseFloat(object.events.event[i].longitude);
    const coords = {
      lat: lat,
      lng: lng
    }

    const contentString = object.events.event[i].title + object.events.event[i].description

    const content = {
      content: contentString

    }
    const markerInfo = this.addMarkerInfoWindow(content);

    const marker =  this.addMarker(coords);

    marker.addListener('click', function() {
      markerInfo.open(this.map, marker);

    });

    // marker.addListener('dblclick', function() {
    //   var directionsDisplay = new google.maps.DirectionsRenderer();
    //   var directionsService = new google.maps.DirectionsService();
    //   // arrays to hold copies of the markers and html used by the side_bar
    //   // because the function closure trick doesnt work there
    //   var gmarkers = [];
    //   var htmls = [];
    //
    //   // arrays to hold variants of the info window html with get direction forms open
    //   var to_htmls = [];
    //   var from_htmls = [];
    //
    //   // global "map" variable
    //   var map = null;
    //
    //   var infowindow = new google.maps.InfoWindow({
    //     size: new google.maps.Size(150, 50)
    //   });
    //
    //   function initialize() {
    //
    //     var location = new google.maps.LatLng(50.871622, -4.131561);
    //
    //     var mapOptions = {
    //       center: location,
    //       zoom: 11,
    //       scrollwheel: false
    //     };
    //
    //     map = new google.maps.Map(document.getElementById("map"),
    //     mapOptions);
    //
    //     directionsDisplay.setMap(map);
    //     directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    //     google.maps.event.addListener(map, 'click', function() {
    //       infowindow.close();
    //     });
    //
    //     var image = {
    //       url: 'http://maps.google.com/mapfiles/ms/micons/blue.png'
    //     };
    //     var marker = new google.maps.Marker({
    //       position: location,
    //       map: map,
    //       animation: google.maps.Animation.DROP,
    //       icon: image,
    //       title: 'Deer Park Dairy'
    //     });
    //
    //     var i = gmarkers.length;
    //     latlng = location;
    //
    //     // The info window version with the "to here" form open
    //     to_htmls[i] = html + '<br>Directions: <b>To here<\/b> - <a href="javascript:fromhere(' + i + ')">From here<\/a>' +
    //     '<br>Start address:<form action="javascript:getDirections()">' +
    //     '<input type="text" SIZE=40 MAXLENGTH=40 name="saddr" id="saddr" value="" /><br>' +
    //     '<INPUT value="Get Directions" TYPE="button" onclick="getDirections()"><br>' +
    //     'Walk <input type="checkbox" name="walk" id="walk" /> &nbsp; Avoid Highways <input type="checkbox" name="highways" id="highways" />' +
    //     '<input type="hidden" id="daddr" value="' + latlng.lat() + ',' + latlng.lng() +
    //     '"/>';
    //     // The info window version with the "from here" form open
    //     from_htmls[i] = html + '<br>Directions: <a href="javascript:tohere(' + i + ')">To here<\/a> - <b>From here<\/b>' +
    //     '<br>End address:<form action="javascript:getDirections()">' +
    //     '<input type="text" SIZE=40 MAXLENGTH=40 name="daddr" id="daddr" value="" /><br>' +
    //     '<INPUT value="Get Directions" TYPE="SUBMIT"><br>' +
    //     'Walk <input type="checkbox" name="walk" id="walk" /> &nbsp; Avoid Highways <input type="checkbox" name="highways" id="highways" />' +
    //     '<input type="hidden" id="saddr" value="' + latlng.lat() + ',' + latlng.lng() +
    //     '"/>';
    //     // The inactive version of the direction info
    //     var html = marker.getTitle() + '<br>Directions: <a href="javascript:tohere(' + i + ')">To here<\/a> - <a href="javascript:fromhere(' + i + ')">From here<\/a>';
    //     var contentString = html;
    //
    //     google.maps.event.addListener(marker, 'click', function() {
    //       map.setZoom(15);
    //       map.setCenter(marker.getPosition());
    //       infowindow.setContent(contentString);
    //       infowindow.open(map, marker);
    //     });
    //     // save the info we need to use later for the side_bar
    //     gmarkers.push(marker);
    //     htmls[i] = html;
    //   }
    //
    //   google.maps.event.addDomListener(window, 'load', initialize);
    //
    //   // ===== request the directions =====
    //   function getDirections() {
    //     // ==== Set up the walk and avoid highways options ====
    //     var request = {};
    //     if (document.getElementById("walk").checked) {
    //       request.travelMode = google.maps.DirectionsTravelMode.WALKING;
    //     } else {
    //       request.travelMode = google.maps.DirectionsTravelMode.DRIVING;
    //     }
    //
    //     if (document.getElementById("highways").checked) {
    //       request.avoidHighways = true;
    //     }
    //     // ==== set the start and end locations ====
    //     var saddr = document.getElementById("saddr").value;
    //     var daddr = document.getElementById("daddr").value;
    //
    //     request.origin = saddr;
    //     request.destination = daddr;
    //     directionsService.route(request, function(response, status) {
    //       if (status == google.maps.DirectionsStatus.OK) {
    //         directionsDisplay.setDirections(response);
    //       } else alert("Directions not found:" + status);
    //     });
    //   }
    //   function myclick(i) {
    //     google.maps.event.trigger(gmarkers[i], "click");
    //   }
    //
    //
    //   // functions that open the directions forms
    //   function tohere(i) {
    //     // gmarkers[i].openInfoWindowHtml(to_htmls[i]);
    //     infowindow.setContent(to_htmls[i]);
    //     infowindow.open(map, gmarkers[i]);
    //   }
    //
    //   function fromhere(i) {
    //     // gmarkers[i].openInfoWindowHtml(from_htmls[i]);
    //     infowindow.setContent(from_htmls[i]);
    //     infowindow.open(map, gmarkers[i]);
    //   }
    //
    // });




  }
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
    if (isAddButton){
      eventWishList.events.event.forEach(function(event){
        createEventEntryInTable(event, table)
      });
    }
    else {
      eventWishList.forEach(function(event){
        createEventEntryInTable(event, table)
      });
    }
  }

  // PopulateTable();

  // Below is the code that creates rows with event info

  const createEventEntryInTable = function(event, table) {
    const tr = document.createElement('tr');
    tr.id = "id" + event._id;
    addEventName(event, tr);
    addEventVenue(event, tr);
    addVenuePostcode(event, tr);
    addEndDate(event, tr);
    addCategory(event, tr);

    if(isAddButton) {
      addAddButton(event,tr);
    } else {
      deleteButton(event, tr);
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
    button.innerText = 'Add';
    button.style.background = 'green';
    button.style.color ='white';
    button.addEventListener('click', function() {
      const newRequest = new Request('http://localhost:3000/api/EventWishList');
      newRequest.post(function(body) {
      alert('Event added to Wishlist')}, event);
    });
    buttonCell.appendChild(button);
    tr.appendChild(buttonCell);
  }

  const deleteButton = function(event, tr){
    const deleteButtonCell = document.createElement('td');
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';
    deleteButton.style.background = 'red';
    deleteButton.style.color ='white';
    deleteButton.addEventListener('click', function() {
      const newRequest = new Request(`http://localhost:3000/api/EventWishList/${event._id}`);
      newRequest.delete(function(){
        // console.log(event);
        // // console.log(event.id);
        // const id = "#" + event._id;
        //3feabbb3
        //html/css id cannot start with number
        const tr = document.querySelector(`#id${event._id}`);
        const tbody = document.querySelector('#table_body');
        tbody.removeChild(tr);
        alert("Event deleted");
      });
    });
    //calls that request delete by id))

    // need js method that adds a function to the button
    // so I cam call delete by id on that event
    deleteButtonCell.appendChild(deleteButton);
    tr.appendChild(deleteButtonCell);
  }

  PopulateTable(this.eventsWishList);
}

//tableViewer.render(true);

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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(0);
const MapWrapper = __webpack_require__(5);


const DbView = function(){

}

DbView.prototype.renderDbMap= function(){


  const url = 'http://localhost:3000/api/EventWishList';

  const requestToDb = new Request(url);

  requestToDb.get(function(object){

    const mapContainer = document.querySelector('#main_map');

    const latCenter = parseFloat(object[1].latitude);
    const lngCenter = parseFloat(object[1].longitude);

    const newMapCenter = {

      lat: latCenter,
      lng: lngCenter

    }

    const mainMap = new MapWrapper(mapContainer, newMapCenter, 15 );


    if(object.length === 0) {
      alert("You have no events saved ")
    } else
    {
      for (i = 0; i < object.length; i++) {
        const lat = parseFloat(object[i].latitude);
        const lng = parseFloat(object[i].longitude);
        const coords = {
          lat: lat,
          lng: lng
        }

        const contentString = object[i].title + object[i].description

        const content = {
          content: contentString

        }
        const markerInfo = mainMap.addMarkerInfoWindow(content);

        const marker =  mainMap.addMarker(coords);
        marker.addListener('click', function() {
          markerInfo.open(mainMap, marker);
        });
      }
    }

  })
}




module.exports = DbView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map