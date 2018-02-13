// Read and set any environment variables with the dotenv package
require("dotenv").config();


// Import the keys.js file and store it in a variable
// ?
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


// Take 2 arguments for the user's input actions
var action = process.argv[2];
var name = process.argv[3];


// Switch-case to direct which function gets run
switch(action) {
	
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
		function movieThis() {
			
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
		// Using the fs Node package, liri will take the text inside of random.txt and use it to call one of liri's commands
			// It should run spotify-this-song for "I Want it That Way" as follows the text in random.txt
		function doWhatItSays() {

		}


	// In addition to logging the data to terminal window, output the data to log.txt
	// Make sure you append each command you run to the log.txt file
	// Make sure not to overwrite file each time you run a comment



// Add README.md to repository













