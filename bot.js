/*
Bot JS

Initial Release

Xert of DA


*/

var basics = require("/basics.js"),
    irc = require("irc");



// Add StartsWith functionality

if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) === 0;
  };
}



