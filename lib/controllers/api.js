'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
	request = require('request');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.getSteamId = function(req, res) {
	request('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=B69B3D3AAC2A179EA41E576C476BF8C4&steamid=76561197963177697&format=json').pipe(res);
};