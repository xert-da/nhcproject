/*
Everything twitter.

twitterjs.js


0.0.4 - Added interval for new posts

Xert of DigitalAddiction
*/


//define 
var twitter = require("twitter"),
    Twit = require('./twitter.js');

var tClient = new twitter({
   consumer_key: Twit.tcKey,
   consumer_secret: Twit.tcSecret,
   access_token_key: Twit.atKey,
   access_token_secret: Twit.atSecret
});

var tParams = {
    screen_name: "NHC_Atlantic",
    count: 1,
    include_rts: false,
} ;



exports.getCurrent =  function(callback)
{
    tClient.get('statuses/user_timeline', tParams, function(error, tweets, response){
        if (!error)
        {
            callback(tweets[0].text);
        }
        else
        {
            console.log(response);
            callback('Something went horribly wrong.');
        }
        });
};
