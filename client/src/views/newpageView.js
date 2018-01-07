const DisplayChanger = require('./displayChanger.js');

const NewPageView = function(){

}

NewPageView.prototype.createHomepage = function(){
  const display = new DisplayChanger();

  display.displayOn('homepage_top_cont');
  display.displayOn('homepage_sub_top_cont');
  display.displayOn('homepageForm');
}







module.exports = NewPageView;
