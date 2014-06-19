'use strict';

var $ = window.$;

angular.module('steamCategoriesApp')
  .controller('MainCtrl', function ($scope, $http) {
	$http.get('api/steamApi').success(function(response) {
		console.log('parsing');
		$scope.steamID = $(response).find('steamID64').text();
	});
});
