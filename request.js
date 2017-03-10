var request = require('request');

request(
    { url: 'https://api.paris.fr/api/data/2.2/QueFaire/get_events/?token=4f3ff60a873f39938f7f00c43dad49e9e94a83a044f539de962299bbc09630d2&categories=exposition&tags=&start=&end=0&offset=&limit=' },
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var exhibitions = JSON.parse(body).data;
        console.log('last event date format:', typeof exhibitions[0].evenements.realDateEnd);
        console.log('test_deadline_in_21_days', deadline_by(21));
        console.log('test_first_exhibition_closing', close_before(exhibitions[0], deadline_by(150)));
        console.log('test_exhibitions_closing_in_21_days', exhibitions_ending_soon(exhibitions, deadline_by(21)));
      } else {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
      }
    }
    )

function deadline_by(nb_days) {
  var today = new Date ();
  var deadline = new Date();
  deadline.setDate(today.getDate() + nb_days);
  return deadline;
}
function exhibitions_ending_soon(all_exhibitions, deadline) {
  var exhibitions_ending_soon = [];
  all_exhibitions.forEach(function(exhibition) {
    if (close_before(exhibition, deadline)) {
      exhibitions_ending_soon.push(exhibition);
    }
  }
  );
  return exhibitions_ending_soon;
}

function close_before(exhibition, deadline) {
  exhibition_closing_date = new Date (exhibition.evenements.realDateEnd);
  return exhibition_closing_date <= deadline;
}

