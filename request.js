var request = require('request');
request('https://api.paris.fr/api/data/2.2/QueFaire/get_events/?token=4f3ff60a873f39938f7f00c43dad49e9e94a83a044f539de962299bbc09630d2&categories=exposition&tags=&start=&end=0&offset=&limit=', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});