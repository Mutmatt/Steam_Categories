'use strict';

angular.module('steamCategoriesApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
