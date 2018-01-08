const NewPageView = require('./newPageView.js');
const Request = require('../services/request.js');

const FormView = function(){

}

// const catUrl = "http://api.eventful.com/json/categories/list?app_key=ZpGXZc399XdxLZG9";
// const request = new Request(catUrl);
// // request.get(url);

FormView.prototype.populateDropmenu= function(){
  const select = document.querySelector('#categories_list');
}

module.exports = FormView;
