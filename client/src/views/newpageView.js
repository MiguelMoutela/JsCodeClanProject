const NewPageView = function(){

}

const hideElement =function(element){
const hide = element.style.display= "none";
}

NewPageView.prototype.createHomepage = function(){
 const burguer = document.getElementById('burger-check');
hideElement(burguer);
 const navi =  document.getElementById('burger-navigation').style.display= "none";;
 hideElement(navi);
 const selectionForm=  document.getElementById('event-selection-form').style.display= "none";;
 hideElement(selectionForm);
 const radius =  document.getElementById('radius').style.display= "none";;
 hideElement(radius);

 const city =  document.getElementById('city').style.display= "none";;
 hideElement(city);
 // const catList =  document.getElementById('categories-list').style.display= "none";;
 // const startdt=  document.getElementById('start-date').style.display= "none";;
 // const enddt=  document.getElementById('end-date').style.display= "none";;
 // const searchbttn=  document.getElementById('search-events').style.display= "none";;
 // const map=  document.getElementById('main-map').style.display= "none";;
 // const eventTable =  document.getElementById('events-table').style.display= "none";;

}






NewPageView.prototype.resetPage= function(){
  const body = document.querySelector('#body_container');
    // body.innerHTML = '';
    body.style.display = "none";

}

module.exports = NewPageView;
