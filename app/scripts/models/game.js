'use strict';

var Game = function () {
	this.id = -1;
	this.name = '';
	this.tags = {};
};

Game.prototype = {
	addTag: function(newTag) {
		if (!_.contains(Game.tags, newTag)) {
			Game.tags.push(newTag);
		}
	}
};