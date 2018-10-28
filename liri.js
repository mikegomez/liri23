require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');


var keys = require("./keys");
//jfdlasjfdslkfjlsdj
//another comment
//third comment

var nothingVar = "";

//comment looks good!;

var expression = process.argv[2];

var hello = "hello";
var newCode = "double branch changes";
switch (expression) {
    case 'my-tweets':
        getTweets();
        break;
    case `spotify-this-song`:
        mySong();
        break;
    case `movie-this`:
        getMovie();
        break;
    case `do-what-it-says`:
        getMusic();
        break;
}

function getTweets() {
    var client = new Twitter(keys.twitter);
    var params = { screen_name: 'roommatefinder3' };
    client.get('statuses/user_timeline', params, function (error, tweets, res) {
        if (!error) {
            for (var i = 0; i < 5; i++) {
                console.log(tweets[i].text)
            }
        }
    });
}

function mySong(song) {
    var spotify = new Spotify(keys.spotify);
    if (song || 'i saw the sign') {

    }
    spotify.search({ type: 'track', query: "" }, function (err, data) {
        if (err) {
            return console.log('An error occurred: ' + err);
        }

        console.log(data);
    });
}
