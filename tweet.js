// setup
var TwitterBot = require("node-twitterbot").TwitterBot;
var Bot = new TwitterBot("/home/tspear/ascot/config.json");

// actions
Bot.addAction("tweet", function(twitter, action, tweet) {
  Bot.tweet("zzzzzzzzzzzzzzzzzzzz");
});

Bot.addAction("whitenoise", function(twitter, action, tweet) {
  var tweettxt="";
  
  if (process.argv[2]) {
   var hashtagtxt = process.argv[2];
  }  

  while(tweettxt.length < (138 - hashtagtxt.length)) {
    var newchar = "./".charAt(Math.floor(Math.random()*2));
    tweettxt = tweettxt.concat(newchar);
  }

  tweettxt = tweettxt.concat(" #"+hashtagtxt);
  
  console.log("tweeting: " + tweettxt);
  console.log("len: " + tweettxt.length);
  
  Bot.tweet(tweettxt);
});


Bot.addAction("emojitweet", function(twitter, action, tweet) {
  console.log("Tweeting with Emoji");
  var emoji = "🅿️🅿️📶🈁🆖▶️⏸⏯⏹⏺⏭⏮⏩⏪🔀🔁◀️🔼🔽⏫⏬⬅️⬆️⬇️↗️↙️↖️🔄↪️↩️⤴️ℹ️🔤";
  var tweettxt ="";
  if (process.argv[2]) {
   var hashtagtxt = process.argv[2];
  }  
  while(tweettxt.length < (138 - hashtagtxt.length)) {
    var newchar = emoji.charAt(Math.floor(Math.random()*emoji.length));
    tweettxt = tweettxt.concat(newchar);
  }

  tweettxt = tweettxt.concat(" #"+hashtagtxt);
  Bot.tweet(tweettxt);
});


// schedule actions
Bot.now("emojitweet");
