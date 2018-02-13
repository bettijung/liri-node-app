// Read and set any environment variables with the dotenv package
require("dotenv").config();


// Import the keys.js file and store it in a variable
// ?
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


// This file can take in one of the following commands
	// `my-tweets`
		//This will show your last 20 tweets and when they were created at in your terminal window
		node liri.js my-tweets 

	// `spotify-this-song`
		// This will show the following information about the song in your terminal window:
			// Artist(s)
			// Song name
			// Preview link of the song from Spotify
			// The album that he song is from
		node liri.js spotify-this-song '<I Want it That Way>'
		// If no song is provided then program will default to "The Sign" by Ace of Base

	// `movie-this`

	// `do-what-it-says`