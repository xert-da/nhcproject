/* twit.js Twitter functionality
*/

var twitter = require("twitter");
    

var tClient = new twitter({
    
    consumer_key: "fhnEA93ndvY9d7h56KgQhR7qD",
    consumer_secret: "wTmlhwiOT71o3H9mhkOiyMfJSKz7x9Dt2zyKaZvux7a7fCMgpf",
    access_token_key: "3504082167-At8lh18kq9RLfwBCUr47AeOfuk1IGXbPiA7sIMH",
    access_token_secret: "WaJ4e0Jd1Wh6mqSqEPbugIRWpqlVRdEfXiu1aS657GIZh"
});

var tParams = {screen_name: "NHC_Atlantic"} ;

tClient.get('statuses/user_timeline', tParams, function(error, tweets, response){
    if (!error)
    {
        console.log(tweets);
    }
    else
    {
        console.log(response);
        throw error;
    }
});