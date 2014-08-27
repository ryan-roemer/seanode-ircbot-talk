var irc = require("irc");

var bot = new irc.Client("irc.freenode.net", "RyanBot", {
  channels: ["#seanode"]
});

bot.on("message", function (from, to, msg) {
  console.log("%s said %s to %s", from, msg, to);
});
