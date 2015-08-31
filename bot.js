/*
Bot JS

Initial Release

Xert of DA


*/

var basics = require("./basics.js"),
    irc = require("irc"),
    twitter = require("twitter");





//twitter stuff

var tClient = new twitter({
    consumer_key: "fhnEA93ndvY9d7h56KgQhR7qD",
    consumer_secret: "wTmlhwiOT71o3H9mhkOiyMfJSKz7x9Dt2zyKaZvux7a7fCMgpf",
    access_token_key: "3504082167-At8lh18kq9RLfwBCUr47AeOfuk1IGXbPiA7sIMH",
    access_token_secret: "WaJ4e0Jd1Wh6mqSqEPbugIRWpqlVRdEfXiu1aS657GIZh"
});

var tParams = {
    screen_name: "NHC_Atlantic",
    count: 1,
    include_rts: false,
    
} ;




// Add StartsWith functionality

if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) === 0;
  };
}


// Let's start defining the IRC Bot


// Here's the irc config...

/*
Channel: NHC

server: DA (DUH...)

username: WeatherGuy

realName: also weatherGuy
*/



var config = {
    channels: ["#NHC"],
    server: "irc.digitaladdiction.info",
    userName: "WeatherGuy",
    realName: "WeatherGuy",
};

// Here's the bot...

var bot = new irc.Client(config.server, config.userName, {
    channels: config.channels,
    realName: config.realName,
    userName: config.userName,
    floodProtection: true
    });
    
    
// TODO: Add realtime functionality



// On a message, do something or another...

bot.addListener("message", function(from, to, text, message){
    
    // Sanitize the contents of each value
    
    //make a local variable out of the messgae's text
    var theText = text.toString();
    
    //make the message lowercase, so it can be ANyThiNG the stupid user puts in.
    
    theText = theText.toLowerCase();
    
    
    // same comment as above
    var theCommand = text.substr(0, theText.indexOf(' '));
    theCommand = theCommand.toLowerCase();
    
    
    var strFrom = from.toString();
    
    if theCommand.startsWith('!latest')
    {
        console.log(strFrom + ' wants me to give him the latest information from NHC.');
        theText = theText.replace('!latest ', '');
        tClient.get('statuses/user_timeline', tParams, function(error, tweets, response){
        if (!error)
        {
            var theResult = tweets;
        
            var theMainTXT = theResult.text;
        
            bot.say(config.channels[0], strFrom + ': ' + tweets[0].text);
        }
        else
        {
            console.log(response);
            throw error;
        }
});
    }
    
    



});