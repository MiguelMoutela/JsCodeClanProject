const request = require('./services/request.js');

const getSavedEvents = function() {
  const request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/eventify')
  request.addEventListener('load', function(){
    if(this.status !== 200) {
      return;
    }
    const eventWishList = JSON.parse(this.responseText);
  }
  request.send()
}

const deleteByEvent = function(id) {
  const request = new XMLHttpRequest();
  request.open('DELETE', `http://localhost:3000/api/eventify/:{id}`)
  request.addEventListener('load', function(){
    if(this.status !== 500) {
      return;
    }
    request.send()
}

const PopulateTable = function(eventWishList){
  const table = document.querySelector('#thatTableID');
  eventWishList.forEach(function(event){
    createEventEntryInTable(event, table)
  });
}

// Below is the code that creates rows with event info

const createEventEntryInTable = function(event, table) {
  const tr = document.createElement('tr');
  addEventName();
  addEventVenue();
  addVenuePostcode();
  addCategory();
  addEndDate();
  addDeleteButton();
  table.appendChild(tr);
}

const addEventName = function(event, tr){
  const eventName = document.createElement('td');
  eventName.innerText = event.title;
  tr.appendChild(eventName);
}
const addEventVenue = function(event, tr){
  const venueName = document.createElement('td');
  venueName = event.venueName;
  tr.appendChild(venueName);
}
const addVenuePostcode = function(event, tr){
  const venuePostcode = document.createElement('td');
  venueName.innerText = event.postcode;
  tr.appendChild(venuePostcode);
}
const addCategory = function(event, tr){
  const category = document.createElement('td');
  category.innerText = event.category[0];
  tr.appendChild(category);
}
const addEndDate = function(event, tr){
  const endDate = document.createElement('td');
  endDate.innerText = event.endDate;
  tr.appendChild(endDate);
}
const addDeleteButton = function(event, tr){
  const deleteButtonCell = document.createElement('td');
  deleteButtonCell.innerText = 'delete';
  // need js method that adds a function to the button
  // so I cam call delete by id on that event
  tr.appendChild(deleteButton);
}
