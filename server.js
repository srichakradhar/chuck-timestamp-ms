var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("...Chuck's Timestamp Server...");
});

app.get('/:DATE_STRING', function (req, res) {
  var date;
  if(isNaN(Number(req.params.DATE_STRING))){ // We got a string
    date = new Date(req.params.DATE_STRING);
  }else{                                    // We got milliseconds
    date = new Date(Number(req.params.DATE_STRING) * 1000);
  }
  
  var dateArray, naturalDate;
  
  if(Date.parse(date)){
    dateArray = date.toDateString().split(' ');
    naturalDate = dateArray[1] + ' ' + dateArray[2] + ', ' + dateArray[3];
  }else{
    naturalDate = null;
  }
  res.send({unix: Date.parse(date) / 1000, natural: naturalDate});
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Timestamp server listening on port 8080!');
});