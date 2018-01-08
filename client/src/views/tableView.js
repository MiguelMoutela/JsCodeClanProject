const Request = require('../services/request.js');



const TableViewer = function(eventsWishList) {
  this.eventsWishList = [
			{
				"watching_count": null,
				"olson_path": "America/New_York",
				"calendar_count": null,
				"comment_count": null,
				"region_abbr": "CT",
				"postal_code": null,
				"going_count": null,
				"all_day": "0",
				"latitude": "41.2905210",
				"groups": null,
				"url": "http://eventful.com/oldsaybrook/events/irish-comedy-tour-/E0-001-097952900-8?utm_source=apis&utm_medium=apim&utm_campaign=apic",
				"id": "E0-001-097952900-8",
				"privacy": "1",
				"city_name": "Old Saybrook",
				"link_count": null,
				"longitude": "-72.3753170",
				"country_name": "United States",
				"country_abbr": "USA",
				"region_name": "Connecticut",
				"start_time": "2018-03-15 19:30:00",
				"tz_id": null,
				"description": " <p><p>The Irish Comedy Tour takes the party atmosphere of a Dublin pub and combines it with a boisterous, belly-laugh band of hooligans.  The clover -- make that clever -- comedians, whose ancestors hail from the Emerald Isle.</p></p>",
				"modified": "2017-11-18 11:22:39",
				"venue_display": "1",
				"tz_country": null,
				"performers": {
					"performer": {
						"creator": "TheJoveImprov",
						"linker": "evdb",
						"name": "The Irish Comedy Tour",
						"url": "http://eventful.com/performers/the-irish-comedy-tour-/P0-001-000221096-5?utm_source=apis&utm_medium=apim&utm_campaign=apic",
						"id": "P0-001-000221096-5",
						"short_bio": "THREE IRISH COMICS, ONE NIGHT.  An evening of raucous stand up comedy."
					}
				},
				"title": "The Irish Comedy Tour",
				"venue_address": "300 Main Street",
				"geocode_type": "EVDB Geocoder",
				"tz_olson_path": null,
				"recur_string": null,
				"calendars": null,
				"owner": "evdb",
				"going": null,
				"country_abbr2": "US",
				"image": {
					"small": {
						"width": "48",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/small/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "48"
					},
					"width": "48",
					"caption": null,
					"medium": {
						"width": "128",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/medium/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "128"
					},
					"url": "http://d1marr3m5x4iac.cloudfront.net/images/small/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
					"thumb": {
						"width": "48",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/thumb/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "48"
					},
					"height": "48"
				},
				"created": "2016-11-19 09:10:48",
				"venue_id": "V0-001-002359050-1",
				"tz_city": null,
				"stop_time": "22:00",
				"venue_name": "Katharine Hepburn Cultural Arts Center",
				"venue_url": "http://eventful.com/oldsaybrook/venues/katharine-hepburn-cultural-arts-center-/V0-001-002359050-1?utm_source=apis&utm_medium=apim&utm_campaign=apic"
			},
			{
				"watching_count": null,
				"olson_path": "America/New_York",
				"calendar_count": null,
				"comment_count": null,
				"region_abbr": "NY",
				"postal_code": "10566",
				"going_count": null,
				"all_day": "0",
				"latitude": "41.2899323",
				"groups": null,
				"url": "http://eventful.com/peekskill/events/irish-comedy-tour-/E0-001-107269265-7?utm_source=apis&utm_medium=apim&utm_campaign=apic",
				"id": "E0-001-107269265-7",
				"privacy": "1",
				"city_name": "Peekskill",
				"link_count": null,
				"longitude": "-73.9196349",
				"country_name": "United States",
				"country_abbr": "USA",
				"region_name": "New York",
				"start_time": "2018-03-16 20:00:00",
				"tz_id": null,
				"description": " <p>The Irish Comedy Tour takes the party atmosphere of a Dublin pub and combines it with a boisterous, belly-laugh band of hooligans.<p>The clover — make that clever — comedians, whose ancestors hail from the Emerald Isle, include Detroit native Derek Richards; Boston-born Mike McCarthy; Nova Scotia’s Damon Leibert; and from Inchicore, a suburb of Dublin, Ireland Derrick Keane.<p>Audiences howl at Richards’ tales about his mom’s dog, the holidays and dating a stripper. He has appeared on The Bob & Tom Show, XM and Sirius, and The Weather Channel’s Top 10.<p>McCarthy’s no-holds-barred humor has landed him on Comedy Central and Showtime. The “comedy barbarian,” as he calls himself, takes no prisoners when it comes to poking fun at society’s most sensitive topics.<p>Leibert’s unique and energetic style of fiddle playing lies somewhere between the driving dance beat of Cape Breton, and the lyrical music of Ireland. His power packed performance adds an incredible dimension to the show.<p>And finally Keane, originally from Inchicore, Derrick first distinguished himself musically when the duo in which he sang and played swept the All Ireland Talent Competition. His band, Inchicore, sets the gold standard for the Irish music scene in New England and across North America.<p>Don’t miss these hilarious Irish American comedians as they tear apart as well as validate all of the Irish myths and stereotypes.</p></p></p></p></p></p></p>",
				"modified": "2017-09-30 20:31:32",
				"venue_display": "1",
				"tz_country": null,
				"performers": {
					"performer": {
						"creator": "TheJoveImprov",
						"linker": "evdb",
						"name": "The Irish Comedy Tour",
						"url": "http://eventful.com/performers/the-irish-comedy-tour-/P0-001-000221096-5?utm_source=apis&utm_medium=apim&utm_campaign=apic",
						"id": "P0-001-000221096-5",
						"short_bio": "THREE IRISH COMICS, ONE NIGHT.  An evening of raucous stand up comedy."
					}
				},
				"title": "The Irish Comedy Tour",
				"venue_address": "1008 Brown Street",
				"geocode_type": "EVDB Geocoder",
				"tz_olson_path": null,
				"recur_string": null,
				"calendars": null,
				"owner": "evdb",
				"going": null,
				"country_abbr2": "US",
				"image": {
					"small": {
						"width": "48",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/small/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "48"
					},
					"width": "48",
					"caption": null,
					"medium": {
						"width": "128",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/medium/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "128"
					},
					"url": "http://d1marr3m5x4iac.cloudfront.net/images/small/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
					"thumb": {
						"width": "48",
						"url": "http://d1marr3m5x4iac.cloudfront.net/images/thumb/I0-001/002/788/679-8.jpeg_/the-irish-comedy-tour-79.jpeg",
						"height": "48"
					},
					"height": "48"
				},
				"created": "2017-09-30 20:31:32",
				"venue_id": "V0-001-000361529-1",
				"tz_city": null,
				"stop_time": null,
				"venue_name": "Paramount Hudson Valley",
				"venue_url": "http://eventful.com/peekskill/venues/paramount-hudson-valley-/V0-001-000361529-1?utm_source=apis&utm_medium=apim&utm_campaign=apic"
			}
		];
}

// const searchButton = document.querySelector('#search_events');
// searchButton.addEventListener('click', function() {
//   const url =
// })

//const tableViewer = new TableViewer(events);

TableViewer.prototype.render = function(isAddButton) {

  const PopulateTable = function(eventWishList){
    const table = document.querySelector('#table_body');
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
    addEndDate(event, tr);
    addCategory(event, tr);

    if(isAddButton) {
      addAddButton(event,tr);
    } else {
      addDeleteButton(event, tr);
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
    button.innerText = 'add';
    button.addEventListener('click', function() {
      const newRequest = new Request('http://localhost:3000/api/EventWishList');
      newRequest.post(function(body) {
      alert('Event added to Wishlist')}, event);
    });
    buttonCell.appendChild(button);
    tr.appendChild(buttonCell);
  }

  const addDeleteButton = function(event, tr){
    const deleteButtonCell = document.createElement('td');
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete';
    deleteButton.addEventListener('click', function() {
      const newRequest = new Request('http://localhost:3000/api/EventWishList');
      newRequest.delete(event);
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
