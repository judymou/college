var compression = require('compression');
var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');
var gsheet = require('google-spreadsheet');
var gsheetCred = {
  client_email: process.env.gsheet_client_email,
  private_key: process.env.gsheet_private_key
};
var app = express();
var i18n = require('i18next');

var sheet = new gsheet('1EwcpAOYA4PuE6a8H_oNUl-5VdTv4yPa2BPJQ1_ekO1M');

i18n.init({
  ns: 'index_page',
  saveMissing: false,
  returnObjectTrees: true,
  fallbackLng: 'en',
  useCookie: false,
  preload: ['en', 'zh']
});
i18n.registerAppHelper(app);

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(i18n.handle);
app.use(compression());

app.engine('html', expressHandlebars());
app.set('view engine', 'html');

app.get('/en', function(req, res) {
  res.render('index');
});

app.get('/', function(req, res) {
  req.lng = 'zh';
  res.render('index');
});

app.post('/signup', function(req, res) {
  sheet.useServiceAccountAuth(gsheetCred, function(err) {
    if (err) {
      console.log(err);
    } else {
      sheet.addRow(1, {
         name: req.body.name,
         email: req.body.email,
         question: req.body.question || ''
      });
      res.send({success: true});
      return;
    }
    res.send({success: false});
  })
});

var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
