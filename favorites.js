
console.log("friendship bot is starting..")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

	var query ={  
		 q: '#myfirsttweet since:2011-07-11 ', count: 30  
		}


	T.get('search/tweets', query, searched) ;
	
	function searched(err,data,response){

	var fs = require('fs');
	var json = JSON.stringify(data, null, 2);
	fs.writeFile("newFriends.json", json);
	
	for(i = 0; i < data.statuses.length;i++)
	{
	var screenname = data.statuses[i].user.screen_name;
	var id = data.statuses[i].user.id;
	console.log(screenname);
	favoriteIt(id);
		}

	function favoriteIt(getID){
		var friend ={
		 	id: getID,
		 	favorited: true		
		 }
   
   //setTimeout(function() {T.post('favorites/create',friend, callback)}, 1000*25);

	T.post('favorites/create',friend, callback)

	function callback(err, data, response){
			if (err){
				console.log(err.message)
		}
			else{
				console.log("New favorites ")
		}
	}
}
	

	}

	// T.post('direct_messages/new', {user_id:})

