const Request = require('../services/request.js');



const TableViewer = function(eventsWishList) {
  this.eventsWishList = eventsWishList;
}

// const searchButton = document.querySelector('#search_events');
// searchButton.addEventListener('click', function() {
//   const url =
// })

//const tableViewer = new TableViewer(events);

TableViewer.prototype.render = function(isAddButton) {



  const PopulateTable = function(eventWishList){
    const table = document.querySelector('#table_body');
    if (isAddButton){
      eventWishList.events.event.forEach(function(event){
        createEventEntryInTable(event, table)
      });
    }
    else {
      eventWishList.forEach(function(event){
        createEventEntryInTable(event, table)
      });
    }
  }

  // PopulateTable();

  // Below is the code that creates rows with event info

  const createEventEntryInTable = function(event, table) {
    const tr = document.createElement('tr');
    tr.id = "id" + event._id;
    addEventName(event, tr);
    addEventVenue(event, tr);
    addVenuePostcode(event, tr);
    addEndDate(event, tr);
    addCategory(event, tr);

    if(isAddButton) {
      addAddButton(event,tr);
    } else {
      deleteButton(event, tr);
    }
    table.appendChild(tr);
  }

  const nextPageButton = document.querySelector('#next-page');
  nextPageButton.addEventListener('click', function() {
    const table = document.querySelector('#table_body');
    table.innerHTML = '';
  });

  const addEventName = function(event, tr){
    const eventName = document.createElement('td');
    eventName.innerText = event.title;
    tr.appendChild(eventName);
  }
  const addEventVenue = function(event, tr){
    const venueName = document.createElement('td');
    venueName.innerText = event.venue_name;
    tr.appendChild(venueName);
  }
  const addVenuePostcode = function(event, tr){
    const venuePostcode = document.createElement('td');
    venuePostcode.innerText = event.postal_code;
    tr.appendChild(venuePostcode);
  }
  const addCategory = function(event, tr){
    const category = document.createElement('td');
    // category.innerText = event.categories.category.id;
    tr.appendChild(category);
  }
  const addEndDate = function(event, tr){
    const endDate = document.createElement('td');
    endDate.innerText = event.stop_time;
    tr.appendChild(endDate);
  }

  const addAddButton = function(event, tr){
    const buttonCell = document.createElement('td');
    const button = document.createElement('button')
    button.innerText = 'Add';
    button.style.background = 'green';
    button.style.color ='white';
    button.addEventListener('click', function() {
      const newRequest = new Request('http://localhost:3000/api/EventWishList');
      newRequest.post(function(body) {
      alert('Event added to Wishlist')}, event);
    });
    buttonCell.appendChild(button);
    tr.appendChild(buttonCell);
  }

  const deleteButton = function(event, tr){
    const deleteButtonCell = document.createElement('td');
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';
    deleteButton.style.background = 'red';
    deleteButton.style.color ='white';
    deleteButton.addEventListener('click', function() {
      const newRequest = new Request(`http://localhost:3000/api/EventWishList/${event._id}`);
      newRequest.delete(function(){
        // console.log(event);
        // // console.log(event.id);
        // const id = "#" + event._id;
        //3feabbb3
        //html/css id cannot start with number
        const tr = document.querySelector(`#id${event._id}`);
        const tbody = document.querySelector('#table_body');
        tbody.removeChild(tr);
        alert("Event deleted");
      });
    });
    //calls that request delete by id))

    // need js method that adds a function to the button
    // so I cam call delete by id on that event
    deleteButtonCell.appendChild(deleteButton);
    tr.appendChild(deleteButtonCell);
  }

  PopulateTable(this.eventsWishList);
}

//tableViewer.render(true);

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
