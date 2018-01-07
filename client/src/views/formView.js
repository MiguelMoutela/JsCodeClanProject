const NewPageView = require('./newPageView.js');
const Request = require('../services/request.js');

const FormView = function(){

}

const url = "http://api.eventful.com/rest/categories/list?app_key=ZpGXZc399XdxLZG9";
const request = new Request(url);
// request.get(url);

FormView.prototype.populateDropmenu= function(){
  const select = document.querySelector('#categories_list');
}



module.exports = FormView;
