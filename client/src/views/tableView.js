const request = require('./services/request.js');

const TableViewer = function(eventsWishList) {
  this.eventsWishList = eventsWishList;
}

//const tableViewer = new TableViewer(events);

TableViewer.prototype.render = function(isAddButton) {

  const PopulateTable = function(eventWishList){
    const table = document.querySelector('#thatTableID');
    eventWishList.forEach(function(event){
      createEventEntryInTable(event, table)
    });
  }

  // Below is the code that creates rows with event info

  const createEventEntryInTable = function(event, table) {
    const tr = document.createElement('tr');
    addEventName(event, tr);
    addEventVenue(event, tr);
    addVenuePostcode(event, tr);
    addCategory(event, tr);
    addEndDate(event, tr);

    if(isAddButton) {
      addButton(event,tr);
    } else {
      deleteButton(event, tr);
    }
    table.appendChild(tr);
  }

  const addEventName = function(event, tr){
    const eventName = document.createElement('td');
    eventName.innerText = event.title;
    tr.appendChild(eventName);
  }
  const addEventVenue = function(event, tr){
    const venueName = document.createElement('td');
    venueName = event.venue_name;
    tr.appendChild(venueName);
  }
  const addVenuePostcode = function(event, tr){
    const venuePostcode = document.createElement('td');
    venueName.innerText = event.postal_code;
    tr.appendChild(venuePostcode);
  }
  const addCategory = function(event, tr){
    const category = document.createElement('td');
    category.innerText = event.categories.category.id;
    tr.appendChild(category);
  }
  const addEndDate = function(event, tr){
    const endDate = document.createElement('td');
    endDate.innerText = event.endDate;
    tr.appendChild(endDate);
  }

  const addButton = function(event, tr){
    const buttonCell = document.createElement('td');
    const button = document.createElement('button')
    button.innerText = 'delete';
    button.addEventListener('click', function() {
    });
    //calls that request delete by id))

    // need js method that adds a function to the button
    // so I cam call delete by id on that event
    buttonCell.appendChild(button);
    tr.appendChild(buttonCell);
  }

  const deleteButton = function(event, tr){
    const deleteButtonCell = document.createElement('td');
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete';
    deleteButton.addEventListener('click', function() {
    });
    //calls that request delete by id))

    // need js method that adds a function to the button
    // so I cam call delete by id on that event
    deleteButtonCell.appendChild(deleteButton);
    tr.appendChild(deleteButtonCell);
  }

  PopulateTable(this.eventsWishList);
}

//tableViewer.render(ture);

// const getSavedEvents = function() {
//   const request = new XMLHttpRequest();
//   request.open('GET', 'http://localhost:3000/api/eventify')
//   request.addEventListener('load', function(){
//     if(this.status !== 200) {
//       return;
//     }
//     const eventWishList = JSON.parse(this.responseText);
//   }
//   request.send()
// }
//

module.exports = TableViewer;
