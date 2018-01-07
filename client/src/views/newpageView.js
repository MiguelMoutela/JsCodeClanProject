const NewPageView = function(){

}

NewPageView.prototype.resetPage= function(){
  const body = document.querySelector('#body_container');
    // body.innerHTML = '';
    body.style.display = "none";

}

module.exports = NewPageView;
