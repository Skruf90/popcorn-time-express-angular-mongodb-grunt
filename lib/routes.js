'use strict';

var index = require('./controllers'),
    movies = require('./controllers/movies');

module.exports = function(app) {

    app.route('/').get(index.index);

    app.route('/movies').get(movies.movies);
};
