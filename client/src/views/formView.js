const NewPageView = require('./newPageView.js');
const Request = require('../services/request.js');

const FormView = function(){

}


// FormView.prototype.searchByCity= function(event){
//   event.preventDefault();
//
//   const inputCity = document.querySelector('#city').value;
//   const categoryList = document.querySelector('#categories_list');
//   categoryList.addEventListener('change', function (event) {
//     const categorySelected= event.target.value;
//     const searchUrl = `http://api.eventful.com/json/events/search?app_key=ZpGXZc399XdxLZG9&location=${inputCity}&category=${categorySelected}&date=Future`;
//
//     const request = new Request(searchUrl);
//     request.get(function(allEvents){
//
//     })
    // not absolutly sure of this bellow well or above
    // const outcomeObject = request.get();
    // return outcomeObject
//   });
// }
//
//   //not sure about the binding here..is it required or not? same for function needing event
//   FormView.prototype.searchAroundMe= function(event){
//     event.preventDefault();
//
//     if(navigator.geolocation){
//       navigator.geolocation.getCurrentPosition(function(position) {
//         const lat= position.coords.latitude;
//         const lng= position.coords.longitude;
//


//       });
//
//       const categoryList = document.querySelector('#categories_list');
//       categoryList.addEventListener('change', function (event) {
//         const categorySelected= event.target.value;
//       })
//
//         const radius = document.querySelector('#radius').value;
//
//         const searchUrl = `
//         http://api.eventful.com/json/events/search?app_key=ZpGXZc399XdxLZG9&where=${lat},${lng}&within=${radius}&category=${categorySelected}`;
//
//         const request = new Request(searchUrl);
//
//       }.bind(this), function() {
//         alert('Not able search');
//       };
//     }
//     else{
//       alert('You do not have geolocation available on your device');
//     }
//   }


    module.exports = FormView;
