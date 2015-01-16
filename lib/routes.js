'use strict';

var index = require('./controllers'),
    movies = require('./controllers/movies');

module.exports = function(app) {

    app.route('/').get(index.index);

    app.route('/movies')
        .get(movies.getAll)
        .post(movies.create);

    app.route('/movies/:id')
        .get(movies.get)
        .put(movies.update)
        .delete(movies.delete);

    //app.route('/movie/:id').get(movies.saveMovie);
};
