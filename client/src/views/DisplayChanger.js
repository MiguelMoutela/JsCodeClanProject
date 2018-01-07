const DisplayChanger =function(){
}

DisplayChanger.prototype.displayOn = function(id){
  document.getElementById(id).style.display = 'block';
}

DisplayChanger.prototype.displayOff = function(id){
  document.getElementById(id).style.display = 'none';

}

// DisplayChanger.prototype.classON = function(id){
//   const elements = document.getElementsByClassName(id);
//   console.log(elements);
//   elements.forEach(function(element){
//     element.style.display = 'block';
//   }
//
// }
//
DisplayChanger.prototype.classOFF = function(id){
  const elements = document.getElementsByClassName(id);
  // console.log(elements);
  // elements.forEach(function(element){
  //   element.style.display = 'none';
  // });
  for (i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }
}
  module.exports= DisplayChanger;
