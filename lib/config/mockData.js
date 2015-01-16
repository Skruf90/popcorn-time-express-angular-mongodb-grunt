'use strict';

var mongoose = require('mongoose'),
    Movie = mongoose.model('Movie');

Movie.find({}).remove(function () {
    Movie.create([
        {
            title: 'Commando',
            director: 'Mark L. Lester',
            actors: "Arnold Schwarzenegger, Rae Dawn Chong",
            year: '1985'
        },
        {
            title: 'Raw Deal',
            director: 'John Irvin',
            actors: "Arnold Schwarzenegger, Kathryn Harrold, Darren McGavin",
            year: '1986'
        },
        {
            title: 'Predator',
            director: 'John McTiernan',
            actors: "Arnold Schwarzenegger, Carl Weathers, Bill Duke",
            year: '1987'
        }
    ], function () {
        console.log('Movies have been populated.');
    });
});
