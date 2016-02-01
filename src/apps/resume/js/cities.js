
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
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
 console.log(name)
  var alertColor = 'blue'
  var alert = ''
  var alertBttn = ''
  if(city.hasOwnProperty('alerts'))
  {
    alertColor = 'red'
    alert = city.alerts[0].title
    alertBttn = '<a class="waves-effect waves-light btn modal-trigger" href="#'+name+ 'popup">More Info</a>'
    $('#warnings').append('<div id="'+ name + 'popup" class="modal"><div class="modal-content"><h4>'+city.alerts[0].title+'</h4><p>'+
  city.alerts[0].description +'</p></div><div class="modal-footer"><a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a></div></div>')

  }
  var latlng = [city.latitude, city.longitude]
  var circle = L.circle(latlng, 10, {
      color: alertColor,
      fillColor: '#f03',
      fillOpacity: 0.5
  }).bindPopup(name + '<br>' + alert + '<br>' + alertBttn)
  
  markersLayerGroup.addLayer(circle)
}
function displayCity(city, name){
   // console.log(city.currently)
   var windDir = 'None'
   if(1 <= city.currently.windBearing <= 89)
   {
      windDir = 'NE'
   }
   else if(city.currently.windBearing == 90 )
   {
      windDir = 'E'
   }
   else if(91 <= city.currently.windBearing <= 179)
   {
      windDir = 'SE'
   }
   else if(city.currently.windBearing == 180 )
   {
      windDir = 'S'
   }
   else if(181 <= city.currently.windBearing <= 269)
   {
      windDir = 'SW'
   }
   else if(city.currently.windBearing == 270 )
   {
      windDir = 'W'
   }
   else if(271 <= city.currently.windBearing <= 359)
   {
      windDir = 'NW'
   }
   else{
      windDir = "N"
   }
   var humidity = city.currently.humidity * 100

   var warning = ''
  //  if(city.hasOwnProperty('alerts'))
  // {
  //   warning = '<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Warning</a>'+
  // '<div id="modal1" class="modal"><div class="modal-content"><h4>'+city.alerts[0].title+'</h4><p>'+
  // city.alerts[0].description +'</p></div><div class="modal-footer"><a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a></div></div>'
  // }
  $('#cities').append('<div class="col s12 m6"></div><div class="card"><div class="card-image waves-effect waves-block waves-light center-align"><canvas class=" '
    +city.currently.icon + '"></canvas></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+ sepName(name)
    + '<i class="material-icons right iconCustom">more_vert</i></span><p>'
    + city.currently.summary+ '</p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'
    + name +  '<i class="material-icons right">close</i></span> <div id="'+name+'"></div></div></div>')
// inner content
   $('#'+name).append('<h3 class="carddetail">'+ city.currently.apparentTemperature
    + ' </h3><h3 class="climacon fahrenheit carddetail"></h3><h5> Wind speed is '+ city.currently.windSpeed +' MPH</h5>'
    +'<h5 class="climacon compass"> '+city.currently.windBearing+'&deg '+windDir+'</h5>'+'<h5 class="climacon umbrella"> '+humidity+' %'+'</h5>'
    + warning) 
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
function sepName(name){
  if (name == 'newyork' || name == 'Newyork'){
    return 'New York'
  }
  else if (name == 'sanfrancisco' || name == 'Sanfrancisco'){
    return 'San Francisco'
  }
  else{
    return name;
  }
};

  