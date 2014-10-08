'use strict';

var movieApp = angular.module('movieApp', ['xeditable']);

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

movieApp.controller('MovieController', function($scope, $http) {

    $scope.loadMovies = function() {
        return $http.get("/movies").success(function(response){
            $scope.movies = response;
        });
    };

    $scope.saveMovie = function(data, id) {
        return $http.post("/movie/" + id);
    }
});
