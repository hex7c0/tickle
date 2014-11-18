'use strict';
/**
 * @file tickle main
 * @module tickle
 * @package tickle
 * @subpackage main
 * @version 1.1.0
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * initialize module
 */
if (!global.tickle) {
  global.tickle = new TICKLE();
}

/*
 * functions
 */
/**
 * tickle class
 * 
 * @class TICKLE
 */
function TICKLE() {

  this.all = 0;
  this.time = [ process.hrtime(), 0 ];
  this.route = Object.create(null);
}

/**
 * reset all routing counter
 * 
 * @function reset
 */
TICKLE.prototype.reset = function() {

  this.all = 0;
  var route = this.route;
  for ( var property in route) {
    route[property] = 0;
  }
  return;
};
/**
 * increase counter
 * 
 * @function add
 * @param {String} path - url path
 * @return {Integer}
 */
TICKLE.prototype.add = function(path) {

  this.all++;
  var plus;
  if (this.route[path] !== undefined) {
    plus = ++this.route[path];
  } else {
    plus = this.route[path] = 1;
  }
  return plus;
};
/**
 * time per request
 * 
 * @function tpr
 * @return {Float}
 */
TICKLE.prototype.tpr = function() {

  var time = this.time;
  var all = this.all;
  var diff = process.hrtime(time[0]);
  this.time = [ process.hrtime(), all ];
  return ((diff[0] * 1e9 + diff[1]) / 1e6) / (all - time[1]);
};

/**
 * main
 * 
 * @exports tickle
 * @function tickle
 * @param {Object} req - client request
 * @param {Object} [res] - response to client
 * @param {next} [next] - continue routes
 * @return {Integer|Functions}
 */
function tickle(req, res, next) {

  req.tickle = global.tickle.add(req.url);
  return next !== undefined ? next() : req.tickle;
}
module.exports = tickle;
