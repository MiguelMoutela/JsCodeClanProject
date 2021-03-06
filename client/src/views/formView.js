const NewPageView = require('./newPageView.js');
const Request = require('../services/request.js');
const TableView = require('./tableView.js');
const MapWrapper = require('./mapWrapper.js')

const FormView = function(){}

FormView.prototype.searchByCity= function(mainMap){
  let pageNumber = 1;

  const inputCity = document.querySelector('#city').value;

  const categoryList = document.querySelector('#categories_list');

  const categorySelected = categoryList.value;

  const nextPageButton = document.querySelector('#next-page');

  nextPageButton.addEventListener('click', function() {
    pageNumber++;

    const searchUrl = `http://localhost:3000/api/citysearch/${inputCity}/${categorySelected}/${pageNumber}`;

    const request = new Request(searchUrl);

    request.get(function(object){
      console.log(object);
      if(object.events === null) {
        alert("There are no events listed.")
      }
      else {
        mainMap.displayEventMarkers(object);
        const tableView = new TableView(object);
        tableView.render(true);
      }
    });
  })

  const searchUrl = `http://localhost:3000/api/citysearch/${inputCity}/${categorySelected}/${pageNumber}`;

  const request = new Request(searchUrl);

  request.get(function(object){

    if(object.events === null) {
      alert("There are no events listed.")
    }
    else {
      mainMap.displayEventMarkers(object);
      const tableView = new TableView(object);
      tableView.render(true);
    }
  });
}

FormView.prototype.searchAroundMe= function(mainMap){

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      let pageNumber = 1;
      const lat= position.coords.latitude;
      const lng= position.coords.longitude;

      const categoryList = document.querySelector('#categories_list');

      const categorySelected= categoryList.value;

      const radius = document.querySelector('#radius').value;

      const nextPageButton = document.querySelector('#next-page');

      nextPageButton.addEventListener('click', function() {
        pageNumber++;

        const searchUrl = `http://localhost:3000/api/aroundMeSearch/${lat}/${lng}/${radius}/${categorySelected}/${pageNumber}`;

        const request = new Request(searchUrl);

        request.get(function(object){
          console.log(object);
          if(object.events === null) {
            alert("There are no events listed.")
          }
          else {
            mainMap.displayEventMarkers(object);
            const tableView = new TableView(object);
            tableView.render(true);
          }
        });
      })


      const searchUrl = `http://localhost:3000/api/aroundMeSearch/${lat}/${lng}/${radius}/${categorySelected}/${pageNumber}`;

      const request = new Request(searchUrl);

      request.get(function(object){
        if(object.events === null) {
          alert("There are no events listed.")
        } else {
          mainMap.displayEventMarkers(object);
          const tableView = new TableView(object);
          tableView.render(true);
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
