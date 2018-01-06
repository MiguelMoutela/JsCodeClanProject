const newPageView = require('./newPageView.js');
const request = require('../services/request.js');

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
