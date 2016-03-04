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
   

    var person = {
        name: name,
        duration: duration,
        lat: lat,
        lon: lon,
        isGroupOwner: isGroupOwner
    };

    // simulate this person entering
    enter(person);

    movement();

    // simulate this person leaving after 'duration' seconds
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
        isGroupOwner: person.isGroupOwner
    });
}

function movement() {

    console.log("movement called!");

    var ref = new Firebase('https://drinktogether.firebaseio.com/');

    ref.child('users').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var user = childSnapshot.val();
            var childKey = childSnapshot.key();
            console.log(user);

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
                isGroupOwner: provider.isGroupOwner
            });

        });
    });
}


function leave(person) {
    console.log('leave', person)
    var ref = new Firebase('https://drinktogether.firebaseio.com/users')
    var onComplete = function(error) {
        if (error) {
            console.log('Leave Synchronization failed');
        } else {
            console.log('Leave Synchronization succeeded');
        }
    };
    ref.child(person.name).remove(onComplete);
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
