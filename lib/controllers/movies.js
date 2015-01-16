'use strict';

var mongoose = require('mongoose'),
    ObjectID = require('mongodb').ObjectID,
    Movie = mongoose.model('Movie');

/*
 * Get all the movies.
 */
exports.getAll = function(req, res) {
    return Movie.find(function(err, mvs){
        if(!err) {
            console.log('Movies retrieved: ' + mvs);
            return res.json(mvs);
        } else {
            return res.send(err);
        }
    });
};

/*
 * Delete movie.
 */
exports.delete = function(req, res, next) {
    console.log('delete function called')
}

/*
 * Get movie.
 */
exports.get = function(req, res, next) {

}


/*
 * Update movie.
 */
exports.update = function(req, res, next) {
    var newMovie = new Movie(req.body);
    console.log("_id: " + req.params.id);
    Movie.findById(req.params.id, function(err, movie){
        if(err) {
            console.log(err);
            return res.json(400, err);
        }

        if(!movie) return res.send(404);

        newMovie.save(function(err){
            if(err) return res.send(400);

            res.send(200);
        });
    });
}


/*
 * Create movie.
 */
exports.create = function(req, res, next) {
    var movieId = req.user._id;
}
