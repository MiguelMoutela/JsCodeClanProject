const DisplayChanger =function(){
}

DisplayChanger.prototype.displayOn = function(id){
  document.getElementById(id).style.display = 'block';
}

DisplayChanger.prototype.displayOff = function(id){
  document.getElementById(id).style.display = 'none';

}

DisplayChanger.prototype.classON = function(id){
  document.getElementsByClassName(id).style.display = 'block';

}

DisplayChanger.prototype.classOFF = function(id){
  document.getElementsByClassName(id).style.display = 'none';

}
module.exports= DisplayChanger;
