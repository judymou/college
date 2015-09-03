var express = require('express');
var fs = require('fs');
var path = require('path');
var gsheet = require("google-spreadsheet");
var gsheetCred = require('./google-generated-creds.json');
var app = express();

var sheet = new gsheet('1EwcpAOYA4PuE6a8H_oNUl-5VdTv4yPa2BPJQ1_ekO1M');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  serveFile('index.html', res);
});

app.post('/signup', function(req, res) {
  console.log(req);
  sheet.useServiceAccountAuth(gsheetCred, function(err) {
    if (err) {
      console.log(err);
    } else {
      sheet.addRow(1, {
         name: req.name,
         email: req.email,
         question: req.question || ''
      });
      res.send({success: true});
      return;
    }
    res.send({success: false});
  })
});

function serveFile(path, res) {
  fs.readFile(path, function (err, data){
    res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    res.write(data);
    res.end();
  });
}

var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
