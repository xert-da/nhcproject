/*
Bot JS
Initial Release 0.0.3 Alpha
Xert of DA
*/

var basics = require("./basics.js"),
    irc = require("irc"),
    twitjs = require('./twitterjs.js'),
    theStream = require("./stream.js");




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
Channel: #NHC

server: DigitalAddiction (DUH...)

username: WeatherGuy

realName: also weatherGuy
*/


// No SSL :o
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

    // latest command
    if (theText.startsWith('!latest'))
    {
        console.log(strFrom + ' wants me to give him the latest information from NHC.');
        twitjs.getCurrent(function(data){
            bot.say(config.channels[0], 'LATEST REPORT: ' + data);
        });
    }
});




// Streaming bit

//declare length
var twoMinutes = 2 * 60 * 100;

//declare empty base
var baseMessage = '';


//get it the first time, won't run more than once. 
twitjs.getCurrent(function(data){
    bot.say(config.channels[0], 'LATEST REPORT: ' + data);
    baseMessage = data;  
});



//Get new post every two minutes

setInterval(function(){
    
    //localize the base message
    var baseMessageC = baseMessage;
    
    //get current info
    twitjs.getCurrent(function(data){
        
         //if identical, pass
         if (baseMessageC == data)
         {
             console.log('Nothing new to report.');
         }
         
         //else raise an event, and assign baseMessage to the newest data.
         else
         {
             console.log('Something new to report.');
             baseMessage = data;
             bot.say(config.channels[0], 'LATEST REPORT: ' + data);
         }
   });
   
   //every two minutes
}, twoMinutes);