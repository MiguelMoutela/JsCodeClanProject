const DisplayChanger =function(){
}

DisplayChanger.prototype.displayOn = function(id){
  document.getElementById(id).style.display = 'block';
// document.getElementById(id).style.removeProperty( 'display' );
// const change = element.style.display= "block";
}

DisplayChanger.prototype.displayOff = function(id){
  document.getElementById(id).style.display = 'none';

}

module.exports= DisplayChanger;
