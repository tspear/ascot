// setup
var TwitterBot = require("node-twitterbot").TwitterBot;
var Bot = new TwitterBot("config.json");

// actions
Bot.addAction("tweet", function(twitter, action, tweet) {
  Bot.tweet("zzzzzzzzzzzzzzzzzzzz");
});

Bot.addAction("whitenoise", function(twitter, action, tweet) {
  var tweettxt="";
  while(tweettxt.length<128){
    var newchar = "./".charAt(Math.floor(Math.random()*2));
    tweettxt = tweettxt.concat(newchar);
  }
  tweettxt = tweettxt.concat(" #whitenoise");
  console.log("tweeting: " + tweettxt);
  console.log("len: " + tweettxt.length);
  Bot.tweet(tweettxt);
});

// schedule actions
Bot.now("whitenoise");
