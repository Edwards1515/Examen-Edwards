var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
//mongoose = require('mongoose');

var isProduction = process.env.NODE_ENV === 'production';

// Create global app object
var app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));

//Challenge
app.use('/examen',require('./archivos/examen.js'));


// finally, let's start our server...
var server = app.listen(process.env.PORT || 3366, function () {
    console.log('Listening on port ' + server.address().port);
});

//Un cambio