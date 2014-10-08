'use strict';

var express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose');

// Open db connection.
var environment = require('./lib/config/env/development');

mongoose.connect(environment.mongo.uri);
// Load mongoose data models.
var mongooseModels = path.join(__dirname + '/lib/models');

fs.readdirSync(mongooseModels).forEach(function(file){
    console.log('Load mongoose model: ' + mongooseModels + '/' + file);
    require(mongooseModels + '/' + file);
});
// Populate database with mock data.
require('./lib/config/mockData');

// Load routes and express configuration.
require('./lib/routes')(app);
require('./lib/config/express')(app);

// Start express listening.
var server = app.listen(9001, function(){
    console.log('Express server is listening on port %d', server.address().port);
});
