'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title: String,
    director: String,
    actors: [String],
    year: String
});

mongoose.model('Movie', ProductSchema);
