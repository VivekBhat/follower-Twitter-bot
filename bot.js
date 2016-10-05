console.log("replier bot is starting..")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


var stream = T.stream('public');

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
	
	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;
	
	console.log( 'from: ' + eventMsg.user.name);
	
	if (replyto == 'frieza175') {

		var newtweet = 'thanks a lot @' + from + ' you are awesome..' ;
		console.log(newtweet)
		//tweetIt(newtweet);

	}

}

// function tweetIt(txt){

// 	var tweet = {
// 		status : txt
// 	}

// setTimeout(function() {T.post('statuses/update', tweet, tweeted)}, 1000*20);


	
	

// function tweeted(err, data, response) {
// 	if (err) {
// 		console.log("Something went wrong my friend.. I think " + err.message);
// 	} else {
// 		console.log("It Worked!");
// 	}

// }
// }