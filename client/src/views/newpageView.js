const newPageView = function(){

}

newPageView.prototype.resetPage= function(){
  const body = document.querySelector('#body_container');
    body.innerHTML = '';

}

module.exports = newPageView;
