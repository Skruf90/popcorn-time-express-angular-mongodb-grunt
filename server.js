'use strict';

var express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose');

var environment = require('./lib/config/env/development');

// Open connection to Mongodb.
mongoose.connect(environment.mongo.uri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error (mongodb started?):'));
db.once('open', function(callback){
    console.info("Connection to MongoDB successful.");
});

// Load mongoose data models.
var mongooseModels = path.join(__dirname + '/lib/models');

fs.readdirSync(mongooseModels).forEach(function(file){
    console.log('Load mongoose model: ' + mongooseModels + '/' + file);
    require(mongooseModels + '/' + file);
});
// Populate database with mock data.
require('./lib/config/mockData');

// Load routes and express configuration.
require('./lib/config/express')(app);
require('./lib/routes')(app);

// Start express listening.
var server = app.listen(9001, function(){
    console.log('Express server is listening on port %d', server.address().port);
});
