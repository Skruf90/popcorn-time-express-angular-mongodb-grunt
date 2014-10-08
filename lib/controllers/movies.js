'use strict';

var mongoose = require('mongoose'),
    Movie = mongoose.model('Movie');

/*
 * Get all the movies.
 */
exports.movies = function(req, res) {
    return Movie.find(function(err, mvs){
        if(!err) {
            console.log('Movies retrieved: ' + mvs);
            return res.json(mvs);
        } else {
            return res.send(err);
        }
    });
}
