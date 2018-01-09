const NewPageView = require('./newPageView.js');
const Request = require('../services/request.js');
const TableView = require('./tableView.js');




const FormView = function(){

}


FormView.prototype.searchByCity= function(){

  const inputCity = document.querySelector('#city').value;

  const categoryList = document.querySelector('#categories_list');

  const categorySelected= categoryList.value;

  const searchUrl = `http://localhost:3000/api/citysearch/${inputCity}/${categorySelected}`;

  const request = new Request(searchUrl);


  request.get(function(object){
    const table = new TableView(object);
    table.render(true);
  });

}

  //not sure about the binding here..is it required or not? same for function needing event
  FormView.prototype.searchAroundMe= function(){

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
          const table = new TableView(object);
          table.render(true);

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
