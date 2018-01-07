const NewPageView = require('./newPageView.js');
const Request = require('../services/request.js');

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
