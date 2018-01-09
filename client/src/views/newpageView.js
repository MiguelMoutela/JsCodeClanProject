const DisplayChanger = require('./displayChanger.js');

const NewPageView = function(){

}

const display = new DisplayChanger();

NewPageView.prototype.clearpage = function(){
  display.classOFF('toggleable');

}

NewPageView.prototype.createHomepage = function(){
  display.displayOn('homepage_top_cont');
  display.displayOn('homepage_sub_top_cont');
  display.displayOn('homepageForm');
}

NewPageView.prototype.createCitySearch = function(){

  display.displayOn('burguer_nav');
  display.displayOn('event_selection_form');
  display.displayOn('searchBox');
  display.displayOff('radius');
  display.displayOff('radius_label');
  display.displayOff('start_date_label');
  display.displayOff('start_date');
  display.displayOff('end_date_label');
  display.displayOff('end_date');
  display.displayOff('search_around_me_button');
  display.displayOn('main_map');
  display.displayOn('events_table');
}

NewPageView.prototype.createNearSearch = function(){

  display.displayOn('burguer_nav');
  display.displayOn('event_selection_form');
  display.displayOn('searchBox');
  display.displayOn('radius');
  display.displayOn('radius_label');
  display.displayOff('city_label');
  display.displayOff('city');
  display.displayOff('start_date_label');
  display.displayOff('start_date');
  display.displayOff('end_date_label');
  display.displayOff('end_date');
  display.displayOff('search_city_button');
  display.displayOn('main_map');
  display.displayOn('events_table');
}

NewPageView.prototype.createDbView = function(){

  display.displayOn('burguer_nav');
  display.displayOff('event_selection_form');
  display.displayOff('searchBox');
  display.displayOff('radius');
  display.displayOff('radius_label');
  display.displayOff('main_map');
  display.displayOn('events_table');
}

NewPageView.prototype.createAboutPage = function(){

  display.displayOn('about_container');
  display.displayOn('about_title');
  display.displayOn('about_text');

}

NewPageView.prototype.changeAboutPageElement = function(id,text){

 display.displayOn('about_container');
 document.getElementById(id).innerText = text;

}


module.exports = NewPageView;
