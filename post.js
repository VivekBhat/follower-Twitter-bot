console.log("replier bot is starting..")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

	var query ={
		 q: '#myfirsttweet  ', count: 100 
		}


	T.get('search/tweets', query, searched) ;
	
	function searched(err,data,response){
	var fs = require('fs');
	var json = JSON.stringify(data, null, 2);
	fs.writeFile("tweet.json", json);
	console.log(" ")
	
	
	var tweet = {

	for (i = 0; i<data.statuses.length ;i++){
	// var name = data.statuses[i].user.screen_name;
	// var id = data.statuses[i].id;
	// console.log("name = " + name);
	// console.log("id = "+ id);
	// 		console.log(" ")

		screen_name : data.statuses[i].user.screen_name;
		text: 'Thanks for liking my page ' + data.statuses[i].user.name;
		}

	T.post('direct_messages/new', tweet , callback);

		function callback(err,data,response){
			if (err){
				console.log(err.message);
			}else
			console.log("Message sent");
		}
	

	}


