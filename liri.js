// Problem Checker
// @ts-check

require("dotenv").config();
var fs = require("fs");
var request = require("request");


// Import the keys.js file and store it in a variable
// ???????
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


// Arguments for the user's input actions
var action = process.argv[2];
var name = process.argv[3];


// Switch-case to direct which function gets run
switch (action) {

	case "my-tweets":
		myTweets();
		break;

	case "spotify-this-song":
		spotifyThisSong();
		break;

	case "movie-this":
		movieThis();
		break;

	case "do-what-it-says":
		doWhatItSays();
		break;
}


// Commands Available
	// myTweets: will show last 20 tweets and when they were created
	function myTweets() {
		console.log("hi");
	}

	// spotifyThisSong: will show song information	
	function spotifyThisSong() {

			// Artist(s)
			// Song name
			// Preview link of the song from Spotify
			// The album that he song is from

		// If no song is provided, default to "The Sign" by Ace of Base
	}


	// movieThis: will output movie information
	var queryUrl = "http://www.omdbapi.com/t=" + name + "&y=&plot=short&apikey=5f3e2dfb";

	function movieThis() {

		request(queryUrl, function(error, response, body) {
			
			if (!error && response.statusCode === 200) {
				
				console.log("Title: " + JSON.parse(body).Title);
				console.log("Year of Release: " + JSON.parse(body).Year);
				console.log("Movie's Rating: " + JSON.parse(body).imdbRating);
				console.log("Movie's Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
				console.log("Production Country: " + JSON.parse(body).Country);
				//........*********&^%$%**I AM HEEREEEEE
			}
		});	
			// Title of the movie
			// Year the movie came out
			// IMDB Rating of the movie
			// Rotten Tomatoes Rating of the movie
			// Country where the movie was produced
			// Language of the movie
			// Plot of the movie
			// Actors in the movie

		// If no movie name is provided, the program will output fata for hte movie 'Mr.Nobody'
	}


	// doWhatItSays: text in random.txt will call one of liri's commands
	function doWhatItSays() {
		
		fs.readFile("random.txt", "utf8", function(error, data) {
			if (error) {
				return console.log(error);
			}
			
			var randomData = data ;
			console.log(randomData);

			// Action chosen
			if (action === "my-tweets") {
				myTweets();
			}

			else if (action === "spotify-this-song") {
				spotifyThisSong();
			}

			else if (action === "movie-this") {
				movieThis();
			}

			else {
				console.log("Invalid input. Try again.");
			}
			
		});
	}


	// In addition to logging the data to terminal window, output the data to log.txt
	// Make sure you append each command you run to the log.txt file
	// Make sure not to overwrite file each time you run a comment
	finalData = "endingOutput";

	fs.appendFile("log.txt", ", " + finalData, function(error) {
		console.log(error || "Here is your content:");
		
	})


// Add README.md to repository









// var Spotify = requite("spotify");
// var spotify = new Spotify(key);
// spotify.search({
//     a: 5,
//     b: 10
// }).then(err, data){

// }





// ================================
// ================================
// ================================
// ================================

// //store keys safely in untracked .env file
// require('dotenv').config();

// //required packages
// const Twitter = require('twitter');
// const Spotify = require('node-spotify-api');
// const request = require('request');
// const fs = require('fs');

// //import js file that reads keys from untracked file
// var keys = require('./keys.js');

// //capture user input
// var command = process.argv[2];
// var searchParam = '';

// 	for (i=3; i<process.argv.length; i++) {
// 		searchParam += process.argv[i] + ' ';
// 	}

// //array of possible commands
// var commands = ['my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says'];

// //run functions based on command entered by user
// if (command===commands[0]) {
// 		console.log('Your request: ' + commands[0]);
// 		getTweets();
// 	}

// else if (command===commands[1]) {
// 		console.log('Your request: ' + commands[1]);
// 		getSong(searchParam);
// 	}

// else if (command===commands[2]) {
// 		console.log('Your request: ' + commands[2]);
// 		getMovie(searchParam);
// 	}

// else if (command===commands[3]) {
// 		console.log('Your request: ' + commands[3]);
// 		getRandom();
// 	}

// else {
// 		console.log('Not a recognized request. Please enter one of the following commands: (' + commands.join(', ') + '), with a search parameter if necessary.')
// 	};

// //get and print last 20 (or 5!) tweets from a specific user
// function getTweets () {
// 	console.log('Requesting from twitter...');

// //twitter authorization
// 	var client = new Twitter(keys.twitter);

// //path, params, callback
// 	client.get('statuses/user_timeline', {user_id: '963869150295810048', count: 20}, function(error, tweets, response) {
// 	  if(error){
// 	  	return console.log('Error occurred: ' + error);
// 	  } else {
// 	  	// console.log(tweets);  // The tweets. 
// 	  	// console.log(response);  // Raw response object. 
// 	  	console.log('-----------------------------------\nLiri\'s Tweets:\n-----------------------------------')
// 	  	//for loop prints all tweets returned
// 	  	for (i=0; i<tweets.length; i++) {
// 	  		console.log(
// 	  			'\n' + 
// 	  			'Timestamp: ' + tweets[i].created_at + "\n" + 
// 	  			'Content: ' + tweets[i].text);
// 	  	};
// 	  	console.log('\n-----------------------------------\n')
// 		}
// });

// };

// //pass through user input for song search on spotify
// function getSong (searchParam) {
// 	console.log('Requesting from spotify...');

// //spotify authorization
// 	var spotify = new Spotify(keys.spotify);
// 	// * Artist(s) ... artists []
//  // 	* The song's name ... name
// 	// * A preview link of the song from Spotify ... preview_url
// 	// * The album that the song is from ... album object

// 	//if no song entered by user, default to:
// 	if (searchParam === ''){
//    		searchParam = 'The Sign Ace of Base';
//    		console.log('No song searched; default is The Sign by Ace of Base. For different song info, please enter your song title after the spotify-this-song command.')
//   };

//   //capture command and search and write to text file for later use
//   let randomWrite = 'spotify-this-song' + ', "' + searchParam.trim() + '"';

// //ADD CODE TO NOT REWRITE SAME SEARCHES?
// 	fs.appendFile('./random.txt', '; ' + randomWrite, function(error) {
// 	  console.log(error || 'P.S. Random commands updated with this song search. Use command do-what-it-says for search roulette!');
// 	});

// //type, track, limit (default 20)
//   spotify.search({ type: 'track', query: searchParam, limit: 1 }, function(error, data) {
// 	  if (error) {
// 	    return console.log('Error occurred: ' + error);
// 	  } else {
// 	  	// console.log(data);
// 	  	// console.log(data.tracks.items);
// 	  	let artists = data.tracks.items[0].artists[0].name;

// 	  	if (data.tracks.items[0].artists.length > 1) {
// 		  	//for array from returned data, print all values
// 		  	for (i=1; i<data.tracks.items[0].artists.length; i++) {
// 		  		artists += ', ' + data.tracks.items[0].artists[i].name;
// 		  	}; 
// 		  };

// 	  	console.log(
// 	  		'-----------------------------------\n' +
// //get mutliple artists?
// 	  		'Artist name(s): ' + artists + '\n' +
// 	  		'Song Title: ' + data.tracks.items[0].name + '\n' +
// 	  		'Preview URL: ' + data.tracks.items[0].preview_url + '\n' +
// 	  		'Album: ' + data.tracks.items[0].album.name + 
// 	  		'\n-----------------------------------\n'
// 	  	); 
// 	  }

// 	});

// };

// //pass in user input for movie and search omdb
// function getMovie (searchParam) {
// 	console.log('Requesting from omdb...');

// // * Title of the movie ... Title
// // * Year the movie came out ... Year
// // * IMDB Rating of the movie ... imdbRating
// // * Rotten Tomatoes Rating of the movie ... Ratings[1].Value
// // * Country where the movie was produced ... Country
// // * Language of the movie ... Language
// // * Plot of the movie ... Plot
// // * Actors in the movie ... Actors

// 	//default movie if none entered
// 	if (searchParam === '') {
// 		searchParam = 'Mr. Nobody'; 
// 		console.log('No movie searched; default is Mr. Nobody. For different movie info, please enter your movie title after the movie-this command.') 	
// 	};

// 	//write command and search to text file for later use
// 	let randomWrite = 'movie-this' + ', "' + searchParam.trim() + '"';

// 	//ADD CODE TO NOT REWRITE SAME SEARCHES?
// 	fs.appendFile('./random.txt', '; ' + randomWrite, function(error) {

// 	  console.log(error || 'P.S. Random commands updated with this movie search. Use command do-what-it-says for search roulette!');

// 	});

// 	//format user input for queryURL
// 	searchParam = searchParam.split(' ').join('+');

// 	var queryURL = "http://www.omdbapi.com/?t=" + searchParam + "&y=&plot=short&apikey=trilogy";

// 	//request movie object from OMDB and parse returned object for info
// 	request(queryURL, function (error, response, body) {
// 	  if (error) {
// 	  	return console.log('Error occurred: ', error); // Print the error if one occurred
// 		} else {
// 			// console.log(JSON.parse(body));

// 			//Lots of Rotten Tomatoes Scores not even included in Ratings array!! :(
// 			var tomatoMeter;
// 				if (JSON.parse(body).Ratings[1]) {
// 					tomatoMeter = JSON.parse(body).Ratings[1].Value
// 				} else {
// 					tomatoMeter = "N/A"
// 				};

// 			console.log(
// 				'-----------------------------------\n' +
// 				'Title of the movie: ' + JSON.parse(body).Title + '\n' +
// 				'Year of release: ' + JSON.parse(body).Year + '\n' +
// 				'IMDB Rating: ' + JSON.parse(body).imdbRating + '\n' +
// 				'Rotten Tomatoes Score: ' + tomatoMeter + '\n' +
// 				'Country of production: ' + JSON.parse(body).Country + '\n' +
// 				'Language(s): ' + JSON.parse(body).Language + '\n' +
// 				'Plot Synopsis: ' + JSON.parse(body).Plot + '\n' +
// 				'Actors: ' + JSON.parse(body).Actors + '\n' +
// 				'-----------------------------------\n'
// 			);
// 		}
// 	});
// };

// //from text file capturing song and movie searches, recall command and search inputs and search again randomly
// function getRandom () {
// 	console.log('Importing from random.txt...');

// 	//read text file and get array info for searching again
// 	fs.readFile('./random.txt', 'UTF-8', (error, data) => {
// 		if (error) {
// 			return console.log('Error occurred: ' + error);
// 		} else {
// 			let allRandom = data.split(';');
//       // console.log(allRandom);

//       let random = allRandom[Math.floor(Math.random()*allRandom.length)];
//       // console.log(random);

//       let randomSearch = random.split(',')
//       console.log(randomSearch[0]);
//       console.log(randomSearch[1]);

//       if (randomSearch[0] === 'spotify-this-song' || ' spotify-this-song') {
//       	getSong(randomSearch[1]);
//       } else if (randomSearch[0] === 'movie-this' || ' movie-this') {
//       	getMovie(randomSearch[1]);
//       }
// 		}
// 	});
// };
