'use strict';

var movieServices = angular.module('movieApp.services', ['ngResource']);

movieServices.factory('Movie', function ($resource) {
    return $resource('movies/:id', {id: '@_id'});
});
