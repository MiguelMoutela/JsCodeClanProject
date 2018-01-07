const NewPageView = function(){

}

NewPageView.prototype.resetPage= function(){
  const body = document.querySelector('#body_container');
    body.innerHTML = '';

}

module.exports = NewPageView;
