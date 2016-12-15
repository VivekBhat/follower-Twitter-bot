console.log("friendship bot is starting..")
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var query = {
    q: '#myfirsttweet', count: 20
}
T.get('search/tweets', query, searched);
function searched(err, data, response) {

    var fs = require('fs');
    var json = JSON.stringify(data, null, 2);
    fs.writeFile("newFriends.json", json);

    for (i = 0; i < data.statuses.length; i++) {

        var screenname = data.statuses[i].user.screen_name;
        console.log(screenname);
        befriend(screenname);
    }
    function befriend(namess) {
        var friend = {
            screen_name: namess,
            follow: true
        }

        // setTimeout(function() {T.post('friendships/create',friend, callback)}, 1000*25);

        T.post('friendships/create', friend, callback)

        function callback(err, data, response) {
            if (err) {
                console.log(err.message)
            }
            else {
                console.log("New friendships")
            }
        }
    }


}
