var irc = require("irc");

var bot = new irc.Client("irc.freenode.net", "SemicolonBot", {
  channels: ["#seanode"]
});

// Log to console.
bot.on("message", function (from, to, msg) {
  console.log("%s said %s to %s", from, msg, to);
});

// bot.on("message", function (from, to, msg) {
//   if (/[^\;]$/.test(msg)) {
//     bot.say(to, msg + "; // There. Added a semicolon for you ;)");
//   }
// });


