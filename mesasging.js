console.log("replier bot is starting..");
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


var tweet = {
	screen_name : 'bhat175' , 
	text: 'Hey there buddy'
}

T.post('direct_messages/new', tweet , callback);

		function callback(err,data,response){
			if (err){
				console.log(err.message);
			}else
			console.log("Message sent");
		}
	