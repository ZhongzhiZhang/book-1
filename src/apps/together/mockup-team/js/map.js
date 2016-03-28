// Each marker is labeled with a single alphabetical character.
var labels = '12345';
var labelIndex = 0;
function initialize() {
  var boulder =  {lat:40.018420740127205 ,lng: -105.27825951576233};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: boulder
  });
  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });
  // Add a marker at the center of the map.
  addMarker(boulder, map);
}
// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initialize);