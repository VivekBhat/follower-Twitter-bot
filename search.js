console.log("replier bot is starting..")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

	var query ={
		 q: '@frieza175 ', count: 100 
		}


	T.get('search/tweets', query, searched) ;
	
	function searched(err,data,response){
	var name = data.statuses[0].user.screen_name;
	var fs = require('fs');
	var json = JSON.stringify(data, null, 2);
	fs.writeFile("myData.json", json);
	console.log(name)
	}

	// T.post('direct_messages/new', {user_id:})

