'use strict';

var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser');

module.exports = function(app) {

    var rootpath = path.normalize(__dirname + '/../..');

    app.use(express.static('app'));
    app.set('views', rootpath + '/app/views');

    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    app.use(bodyParser());

    // todo: handle errors and logs
};
