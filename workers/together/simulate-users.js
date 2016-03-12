var _ = require('lodash')
var random_name = require('node-random-name');
var Firebase = require('firebase');


// Boulder
var city_location = {
    lat: 40.015,
    lon: -105.27
}
var radius = 0.03
    // simualate a random person entering, staying for a duration, and leaving
function simulate() {
    // generate a random person with a random name,
    // random location, and random duration
    var name = random_name();
    var duration = 1 + 60 * Math.random();
    var lat = city_location.lat + radius * (Math.random() - 0.5) * 2;
    var lon = city_location.lon + radius * (Math.random() - 0.5) * 2;
    var isGroupOwner = Math.random() < 0.5 ? true : false;
    var groupID = "000";
    
    // generate a random group size between 1 and 10
    // random date between start and end dates
    var groupName = random_name();
    var size =  Math.floor((Math.random() * 10) + 1);
    var start = new Date(2012, 0, 1);
    var end = new Date();
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    
    // random id for group 
    var randomKey = Math.floor(Math.random()*90000) + 10000;
    
    

    var person = {
        name: name,
        duration: duration,
        lat: lat,
        lon: lon,
        isGroupOwner: isGroupOwner,
	groupID: groupID,
    };
    
        var group = {
        name: groupName,
        size: size,
        date: date,
 
    };
    
 
    
    // simulate this person entering
    enter(person);

    movement();

    // simulate this person leaving after 'duration' seconds

     // simulate this person joinning a given group
        var ref = new Firebase('https://drinktogether.firebaseio.com/groups/id/');
    ref.once('value', function(snapshot){
    	var idlist = snapshot.val()
    	var idpool = Object.keys(idlist)
	var id = idpool[Math.floor(Math.random() * idpool.length)];
    	joinGroup(person, id,group);
    })

        setTimeout(function() {
        leave(person);
    }, duration * 1000);

    
    
}

function enter(person) {
    console.log('enter', person.name);
    // Put this person in the Firebase
    var ref = new Firebase('https://drinktogether.firebaseio.com/users');
    ref.child(person.name).set({
        duration: person.duration,
        lat: person.lat,
        lon: person.lon,
        name: person.name,
        isGroupOwner: person.isGroupOwner,
	groupID: "000",
    });
}

function joinGroup(person, groupID,group) {
   // console.log('join', person.name);
    // Put this person in the Firebase
    var ref = new Firebase('https://drinktogether.firebaseio.com/groups/id/' + groupID + '/listOfUsers');
         	//console.log('JOINING', 'https://drinktogether.firebaseio.com/groups/id/' + groupID + '/listOfUsers');
     // simulate person choices of bars
       var ref2 = new Firebase('https://drinktogether.firebaseio.com/yelp/businesses/');
	   // console.log('Choice of Bar', barList);
        var barList = [];
    ref2.once('value', function(snapshot){
    	var bars = snapshot.val()
        
        for (var barNumber in bars){
          var bar = bars[barNumber]
          var barName = bar.name

  // console.log('Choices of Bar', barName);
          barList.push(barName);

        }

 var randBar = barList[Math.floor(Math.random() * barList.length)];

                 // console.log('randBar', randBar);
    ref.child(person.name).set({
       		randBar: { EndTime : group.date , StartTime: group.date }
    });
            	ref.child(person.name).child(randBar).set({
		 EndTime : "18:00" , StartTime: "15:00"
	});

	var ref4 = new Firebase('https://drinktogether.firebaseio.com/users/');
    	ref4.child(person.name).set({
        duration: person.duration,
        lat: person.lat,
        lon: person.lon,
        name: person.name,
        isGroupOwner: person.isGroupOwner,
	groupID: groupID,
    });
//    	joinGroup(person,groupID,group);
    })

   var ref3 = new Firebase('https://drinktogether.firebaseio.com/groups/id/' + groupID + '/size/');
	ref3.on('value', function(snapshot){
		var size = snapshot.val();
		size = size-1;
		                //  console.log('Size', size);
		//ref3.set(size);
	});
	              //console.log('BarLists', barList);    

   
}

function movement() {

    console.log("movement called!");

    var ref = new Firebase('https://drinktogether.firebaseio.com/');

    ref.child('users').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var user = childSnapshot.val();
            var childKey = childSnapshot.key();
            //console.log(user);

            var latmov = 0;
            var lonmov = 0;

            if (Math.random() < 0.5) {
                latmov = Math.random() * (0.0005).toFixed(4);
                latmov *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            } else {
                lonmov = Math.random() * (0.0005).toFixed(4);
                lonmov *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            };
           
            var lat = latmov + user.lat;
            var lon = lonmov + user.lon;

            // console.log("Lat: " + lat + " CNG: " + (user.lat-lat));
            // console.log("Lon: " + lon + " CNG: " + (user.lon-lon));

            ref.child('users/' + user.name).set({
                lat: lat,
                lon: lon,
                duration: user.duration,
                name: user.name,
                isGroupOwner: user.isGroupOwner,
		groupID: user.groupID
            });

        });
    });
}


function leave(person) {
    console.log('leave', person)

    var groupID;

	var ref2 = new Firebase('https://drinktogether.firebaseio.com/users/'+person.name+'/groupID/');
		console.log('URL: ', 'https://drinktogether.firebaseio.com/users/'+person.name+'/groupID/')
	ref2.on('value', function(snapshot){
		var ID = snapshot.val();
		groupID = ID;
		console.log('Leaving: ', groupID)
    		var ref3 = new Firebase('https://drinktogether.firebaseio.com/groups/id/' + groupID + '/listOfUsers/');
		console.log('Persom: ', 'https://drinktogether.firebaseio.com/groups/id/' + groupID + '/listOfUsers/')
    		var onComplete2 = function(error) {
       		 if (error) {
          			  console.log('Leave Synchronization failed');
       			 } else {
            				console.log('Leave Synchronization succeeded');
        	}
    };
    ref3.child(person.name).remove(onComplete2);

  var onComplete = function(error) {
        if (error) {
            console.log('Leave Synchronization failed');
        } else {
            console.log('Leave Synchronization succeeded');
        }
    };
    var ref = new Firebase('https://drinktogether.firebaseio.com/users/');
   ref.child(person.name).remove(onComplete);
	});



  
}

function clear() {
    // TODO: remove all people from the Firebase
    var ref = new Firebase('https://drinktogether.firebaseio.com/users')
    var onComplete = function(error) {
        if (error) {
            console.log('Clear Synchronization failed');
        } else {
            console.log('Clear Synchronization succeeded');
        }
    };
    ref.remove(onComplete);
}
// clear the firebase, so that the simulation always starts from no one
clear();
// run each second
setInterval(simulate, 2000);


function logout() {
    var ref = new Firebase('https://drinktogether.firebaseio.com/users');
    ref.once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key();
            u = ref.child(key);
            if ((Date.now() - u.lastActive) > 10 * 60 * 1000) {
                u.set('status', 'offline');
            }
        });
    });
}
// Logout inactive users every ten seconds
setInterval(logout, 10000);
