
//my favorite cities
var myFaveCities = ['denver','seattle','newyork','sanfrancisco','chicago']
// create a firebase reference to the root
var weatherRef = new Firebase('https://publicdata-weather.firebaseio.com/');

var data
// console.log(myFaveCities[1])

// read data from only once
weatherRef.on('value', function(snapshot){
  markersLayerGroup.clearLayers()
  $('#cities').empty
  var city = snapshot.val()
  // console.log(city)
  for(i=0;i<=4;i++){
    fave = myFaveCities[i]
    mapCity(city[fave],fave.capitalize())
    displayCity(city[fave],fave.capitalize())
  }
})

var attributionText = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a       href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'

// initialziepp the map
var map = L.map($('#map')[0]).setView([39.50, -98.35], 4)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: attributionText,
    maxZoom: 18,
    id: 'doubleshow.noeko77m',
    accessToken: 'pk.eyJ1IjoiZG91Ymxlc2hvdyIsImEiOiJjaWZ5Y3B1eTE1MHRidWRtMG9uZXluajg4In0.u5ONW27Ly5cU7M5KYi6Y9Q'
}).addTo(map)

// create a layer group to hold all the markers
var markersLayerGroup = L.layerGroup()
// add the makers layer group to the map
markersLayerGroup.addTo(map)

// visualize cities on the map
function mapCity(city,name){
  // console.log('mapCity', city)
  var alertColor = 'blue'
  if(city.hasOwnProperty('alerts'))
  {
    alertColor = 'red'
  }
  var latlng = [city.latitude, city.longitude]
  var circle = L.circle(latlng, 10, {
      color: alertColor,
      fillColor: '#f03',
      fillOpacity: 0.5
  }).bindLabel(name)
  
  markersLayerGroup.addLayer(circle)
}
function displayCity(city, name){
  // console.log('displayCity', city)
   console.log(city.currently)
  $('#cities').append('<div class="col s12 m6"></div><div class="card"><div class="card-image waves-effect waves-block waves-light center-align"><canvas class=" '
    +city.currently.icon + '"></canvas></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+ name 
    +'<i class="material-icons right">more_vert</i></span><p>'
    + city.currently.summary+ '</p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'
    + name + '<i class="material-icons right">close</i></span> <div class="center-align"><p>'+ city.currently.apparentTemperature + '</p><object data="images/SVG/Degrees-Fahrenheit.svg" type="image/svg+xml"></object></div></div></div>')
   //    '<li class="collection-item avatar"> <canvas class="' + city.currently.icon + '" width="98" height="98"></canvas> <span class="title">'+ name + '</span> <p>' 
   // + '<br>' +    ' humidity = ' +
   //  JSON.stringify(city.currently) + '</p></li>'
  //skycons
  var skycons = new Skycons({"color": "pink"});
  var skycons = new Skycons(),list  = [
    "clear-day", "clear-night", "partly-cloudy-day",
    "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
    "fog"
    ],i;

  for(i = list.length; i--; ) {
    var weatherType = list[i],
        elements = document.getElementsByClassName( weatherType );
    for (e = elements.length; e--;){
        skycons.set( elements[e], weatherType );
    }
}
   skycons.play();
}

//helper function
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
