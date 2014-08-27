var irc = require("irc");
var _ = require("lodash");

var RAINBOW = [
  "white",
  "light_red",
  "orange",
  "yellow",
  "light_green",
  "light_blue",
  "light_magenta"
];

var bot = new irc.Client("irc.freenode.net", "RainbowBot", {
  channels: ["#seanode"],
  floodProtection: true
});

// Log to console.
// bot.on("message", function (from, to, msg) {
//   console.log("%s said %s to %s", from, msg, to);
// });

// bot.on("message", function (from, to, msg) {
//   if (/[^\;]$/.test(msg)) {
//     bot.say(to, msg + "; // There. Added a semicolon for you ;)");
//   }
// });

bot.on("message", function (from, to, msg) {
  //var result = /^!rainbow (.*)$/.exec(message)
  var result = /^!shout (.*)$/.exec(msg)
  if (result) {
    var rain = _.map(result[1], function (chr, i) {
      if (chr === " ") { return " "; };

      var color = RAINBOW[i % RAINBOW.length];
      return irc.colors.codes[color] + chr
    }).join("");

    console.log(to, rain);
    bot.say(to, rain);
  }
});
