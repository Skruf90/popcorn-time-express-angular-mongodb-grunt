'use strict';

var movieApp = angular.module('movieApp', ['xeditable', 'movieApp.services']);

movieApp.controller('MainController', function($scope){

    $scope.appName = 'Popcorn Time';

    $scope.sMovies = true;
    $scope.sAdmin = false;

    $scope.showMovies = function() {
        $scope.sMovies = true;
        $scope.sAdmin = false;
    };

    $scope.showAdmin = function() {
        $scope.sMovies = false;
        $scope.sAdmin = true;
    };
});

movieApp.controller('MovieController', function($scope, $http, Movie) {

    $scope.loadMovies = function(){
        return $scope.movies = Movie.query();
    };

    $scope.deleteMovie = function(id){
        return Movie.delete({id: id});
    };

    $scope.updateMovie = function(data, id) {
        return $http.put("/movies/" + id, data);
    }
});
