"use strict";
/**
 * @file tickle main
 * @module tickle
 * @package tickle
 * @subpackage main
 * @version 1.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * initialize module
 */
if (!GLOBAL.tickle) {
    GLOBAL.tickle = new tickle;
}

/*
 * functions
 */
/**
 * tickle class
 * 
 * @class tickle
 */
function tickle() {

    this.all = 0;
    this.time = [process.hrtime(),0];
    this.route = {};
};
/**
 * reset all routing counter
 * 
 * @function reset
 * @return
 */
tickle.prototype.reset = function() {

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
tickle.prototype.add = function(path) {

    var plus = ++this.route[path];
    if (!plus) {
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
tickle.prototype.tpr = function() {

    var time = this.time;
    var diff = process.hrtime(time[0]);
    var all = this.all;
    this.time = [process.hrtime(),all];
    return ((diff[0] * 1e9 + diff[1]) / 1000000) / (all - time[1]);
};
/**
 * body
 * 
 * @exports main
 * @function main
 * @param {Object} req - client request
 * @param {Object} [res] - response to client
 * @param {next} [next] - continue routes
 * @return {Integer|Functions}
 */
module.exports = function(req,res,next) {

    var globo = GLOBAL.tickle;
    globo.all++;
    req.tickle = globo.add(req.url);
    try {
        return next();
    } catch (TypeError) {
        return req.tickle;
    }
};
