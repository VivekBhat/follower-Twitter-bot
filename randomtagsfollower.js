
console.log("friendship bot is starting..")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

	
	var tags = ["cloud computing", "google", "microsoft", "facebook", "noble", "devops", "azure", "pixel", "serverless", "amazon"]
	var x = Math.floor((Math.random() * 10));
	
	var query ={  

		 q: tags[x], count: 25  
		}

//	T.get('search/tweets', query, searched) ;
   setTimeout(function() {T.get('search/tweets', query, searched)}, 1000*25);
 //setTimeout(function() {T.post('favorites/create',friend, callback)}, 1000*25);

	function searched(err,data,response){
	// jso = jso +1;
	// var fs = require('fs');
	// var json = JSON.stringify(data, null, 2);
	// fs.writeFile("newdata_"+ jso +".json", json);
	
	for(i = 0; i < data.statuses.length;i++){
	var screenname = data.statuses[i].user.screen_name;
	var id = data.statuses[i].user.id;

	console.log(screenname + "'s tag is : " + tags[x]);
	if(i%2 ==0){
		befriend(screenname);
		console.log("i is: "+ i + " so befriending: " + screenname)

	}else{
		favoriteIt(id);
		console.log("i is: "+ i + " so favoriting: " + screenname)

	}
		
		}

	function befriend(namess){
		var friend ={
		 	screen_name: namess, 
			follow: true
		}
   
    //setTimeout(function() {T.post('friendships/create',friend, callback)}, 1000*60*5);

	T.post('friendships/create',friend, callback)

	function callback(err, data, response){
			if (err){
				console.log(err.message)
		}
			else{
				console.log("New friendships created with: " + data.screen_name);
		}
	}
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
				console.log("New favorites is:" + data.screen_name)
		}
	}
}
	
	}

	// T.post('direct_messages/new', {user_id:})

