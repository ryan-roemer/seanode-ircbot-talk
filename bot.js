var irc = require("irc");

var client = new irc.Client("irc.freenode.net", "RyanBot", {
  channels: ["#pdxbots"]
});
