const NewPageView = require('./newPageView.js');
const Request = require('../services/request.js');

const FormView = function(){

}

// const catUrl = "http://api.eventful.com/json/categories/list?app_key=ZpGXZc399XdxLZG9";
// const request = new Request(catUrl);
// // request.get(url);

// FormView.prototype.populateDropmenu= function(){
//   const categoriesMenu = document.querySelector('#categories_list');
//   categoriesMenu.addEventListener('change', function (event) {
//     functionThatGetsCategories(event.target.value);
// }

FormView.prototype.searchByCity= function(event){
  event.preventDefault();

  const inputCity = document.querySelector('#city').value;
  const categoryList = document.querySelector('#categories_list');
  categoryList.addEventListener('change', function (event) {
   const categorySelected= event.target.value;
   const searchUrl = `http://api.eventful.com/json/events/search?app_key=ZpGXZc399XdxLZG9&location=${inputCity}&category=${categorySelected}&date=Future`;

   const request = new Request(searchUrl);
   // not absolutly sure of this bellow well or above
   // const outcomeObject = request.get();
   // return outcomeObject
}










module.exports = FormView;
