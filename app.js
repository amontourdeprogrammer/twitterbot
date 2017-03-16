var publish = require('./publish');
var curate = require('./curate');

var exhibition = curate.exhibition;

curate.get_exhibition(function(err, exhibition) {
  if (err)
    console.log('error while selecting exhibition:',err);
  console.log(exhibition);
  publish.tweet(exhibition);
});

