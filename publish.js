var TwitterPackage = require('twitter');
require('dotenv').config();

var secret = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
}
var Twitter = new TwitterPackage(secret);

exports.tweet = function(exhibition) { 
  Twitter.post('statuses/update', tweet_status(exhibition),  function(error, tweet, response){
    if(error){
      console.log('error while posting tweet', error);
      console.log(tweet_status(exhibition));
    }
    console.log(tweet);  // Tweet body.
    //console.log(response);  // Raw response object.
  });
};

function tweet_status(exhibition) {
  var content = "Closing soon:" + exhibition.title + ".  Don't miss out! " + exhibition.url;
  return { status: content };
}
