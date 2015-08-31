/*
Bot JS

Initial Release

Xert of DA


*/

var basics = require("/basics.js"),
    irc = require("irc"),
    twitter = require("twitter");



// Add StartsWith functionality

if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) === 0;
  };
}


// Let's start defining the IRC Bot


// Here's the config...

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
    
    



});