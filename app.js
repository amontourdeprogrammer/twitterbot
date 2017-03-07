var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 'OT87ByHdhxW97OminjhcZmcS2',
  consumer_secret: 'HEfDcpxVmiMJCWdKq6tOOV3UUNs8kqzHRAMFkakq3u8UlnMqcL',
  access_token_key: '838769041242218497-opFtS99PkMa64vHdPhY8Bk8AZugucxU',
  access_token_secret: '3V8EL9wLmFPpvqwtbVVXVPRiYRTyvDLc4chYcUlQsdwB9'
}
var Twitter = new TwitterPackage(secret);

Twitter.post('statuses/update', {status: 'C\'est le début de la fin !'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});