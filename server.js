var express = require('express');
var app = express();

app.get('/:DATE_STRING', function (req, res) {
  var date;
  if(isNaN(parseInt(req.params.DATE_STRING, 10))){
    date = new Date(req.params.DATE_STRING);
  }else{
    date = new Date(parseInt(req.params.DATE_STRING));
  }
  
  var dateArray, naturalDate;
  
  if(Date.parse(date)){
    dateArray = date.toDateString().split(' ');
    naturalDate = dateArray[1] + ' ' + dateArray[2] + ', ' + dateArray[3];
  }else{
    naturalDate = null;
  }
  res.send({unix: Date.parse(date), natural: naturalDate});
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Timestamp server listening on port 8080!');
});