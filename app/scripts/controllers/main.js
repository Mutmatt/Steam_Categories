'use strict';

angular.module('steamCategoriesApp')
  .controller('MainCtrl', function ($scope, $http) {
	$http.get('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=B69B3D3AAC2A179EA41E576C476BF8C4&steamid=76561197960434622&format=json').success(function(values) {
		alert("parsing");
		_steamID = $(xml).find("steamID64").text();
	});


    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
