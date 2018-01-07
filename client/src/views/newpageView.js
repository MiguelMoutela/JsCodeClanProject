const DisplayChanger = require('./displayChanger.js');

const NewPageView = function(){

}

const display = new DisplayChanger();

NewPageView.prototype.createHomepage = function(){
  // const display = new DisplayChanger();

  display.displayOn('homepage_top_cont');
  display.displayOn('homepage_sub_top_cont');
  display.displayOn('homepageForm');
}

NewPageView.prototype.createCitySearch = function(){

  display.displayOn('burguer_nav');
  display.displayOn('searchBox');
  display.displayOff('radius');
  display.displayOff('radius_label');
  display.displayOn('main_map');
  display.displayOn('events_table');
}






module.exports = NewPageView;
