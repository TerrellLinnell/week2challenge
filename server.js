var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var db = require('./model/database');
var animalModel = require("./model/animal");
var animalRoutes = require("./routes/animal");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', animalRoutes);
app.use(express.static('public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
