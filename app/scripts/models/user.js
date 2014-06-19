'use strict';

var _ = window._;

var User = function () {
	this.id = -1;
	this.name = '';
	this.games = {};
};

User.prototype = {
	addGame: function(newGame) {
		if (!_.contains(User.games, newGame)) {
			User.games.push(newGame);
		}
	}
};